import { useEffect, useRef, useState } from 'react';

import getCoordsFromDB from '../api/getCoordsFromDB';
import { useCharacters } from '../hooks/useCharacters';
import isWithinDegrees from '../utils/isWithinDegrees';

import { type Map, type MapType, type Coordinates } from '../types/types';
import ContextMenu from './ContextMenu';

type ImageMapProps = {
  currentGame: Map;
  mapType: MapType;
};

function ImageMap(props: ImageMapProps) {
  const { currentGame, mapType } = props;

  const { characters, setCharacters } = useCharacters();
  const [isContextMenuShown, setContextMenuVisibility] = useState(false);
  const [clickedCoordinates, setClickedCoordinates] = useState<Coordinates>();

  const mapRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    console.log(characters);

    if (characters.every((ch) => ch.isFound)) {
      console.log('all found');
    }
  }, [characters]);

  const matchCharacterToCoords = async (clickedCharacterId: string) => {
    const characterCoords = await getCoordsFromDB(mapType, clickedCharacterId);
    const DELTA = 3;

    if (
      clickedCoordinates &&
      characterCoords &&
      isWithinDegrees(DELTA, clickedCoordinates.x, characterCoords.x) &&
      isWithinDegrees(DELTA, clickedCoordinates.y, characterCoords.y)
    ) {
      // Set character isFound to true
      setCharacters(
        characters.map((mapChar) =>
          mapChar.id === clickedCharacterId
            ? {
                ...mapChar,
                isFound: true,
              }
            : mapChar,
        ),
      );

      //  Print Found
      console.log(`Found ${clickedCharacterId}`);
    } else {
      // Print Try Again
      console.log('try again');
    }
  };

  const handleImageClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const mapRect = mapRef.current && mapRef.current.getBoundingClientRect();

    if (mapRect) {
      const clickX = ((e.clientX - mapRect.x) / mapRect.width) * 100;
      const clickY = ((e.clientY - mapRect.y) / mapRect.height) * 100;

      setClickedCoordinates(() => ({ x: clickX, y: clickY }));
      setContextMenuVisibility(() => true);
    }
  };

  const hideContextMenu = () => setContextMenuVisibility(false);

  return (
    <div className="relative" onBlur={hideContextMenu}>
      <div className="expandable absolute"></div>
      <img
        ref={mapRef}
        src={currentGame.imgSource}
        alt={`Map for ${currentGame.title}`}
        className="mx-auto"
        onClick={handleImageClick}
      />

      {isContextMenuShown && clickedCoordinates && (
        <ContextMenu
          hideMenu={hideContextMenu}
          clickedCoordinates={clickedCoordinates}
          matchCharacterToCoords={matchCharacterToCoords}
        />
      )}
    </div>
  );
}
export default ImageMap;
