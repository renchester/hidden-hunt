import { useEffect, useRef, useState } from 'react';

import getCoordsFromDB from '../api/getCoordsFromDB';
import { useCharacters } from '../hooks/useCharacters';
import isWithinDegrees from '../utils/isWithinDegrees';

import type {
  Map,
  MapType,
  Coordinates,
  CharacterPopupData,
  CharacterInMap,
} from '../types/types';
import ContextMenu from './ContextMenu';
import CharacterPopup from './CharacterPopup';
import getGnomeCoordsFromDb from '../api/getGnomeCoordsFromDb';

type ImageMapProps = {
  currentGame: Map;
  mapType: MapType;
};

function ImageMap(props: ImageMapProps) {
  const { currentGame, mapType } = props;

  const { characters, setCharacters } = useCharacters();
  const [isContextMenuShown, setContextMenuVisibility] = useState(false);
  const [isPopupShown, setPopupVisibility] = useState(false);
  const [characterPopupData, setCharacterPopupData] =
    useState<CharacterPopupData>();
  const [clickedCoordinates, setClickedCoordinates] = useState<Coordinates>();

  const mapRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (characters.every((ch) => ch.isFound)) {
      // Print winner modal
      console.log('all found');
    }
  }, [characters]);

  const hidePopup = () => setPopupVisibility(false);

  const matchCharacterToCoords = async (clickedCharacterId: string) => {
    const characterCoords = await getCoordsFromDB(mapType, clickedCharacterId);
    const DELTA = 3;
    const targetCharacter = characters.find(
      (ch) => ch.id === clickedCharacterId,
    );

    if (
      clickedCoordinates &&
      characterCoords &&
      isWithinDegrees(DELTA, clickedCoordinates.x, characterCoords.x) &&
      isWithinDegrees(DELTA, clickedCoordinates.y, characterCoords.y)
    ) {
      // Set character isFound to true
      setCharacters(() =>
        characters.map((mapChar) =>
          mapChar.id === clickedCharacterId
            ? {
                ...mapChar,
                isFound: true,
              }
            : mapChar,
        ),
      );

      // Display 'Found character' popup
      if (targetCharacter) {
        setPopupVisibility(() => true);
        setCharacterPopupData(() => ({
          character: targetCharacter,
          isFound: true,
        }));
      }
    } else {
      // Display 'Try again' popup
      if (targetCharacter) {
        setPopupVisibility(() => true);
        setCharacterPopupData(() => ({
          character: targetCharacter,
          isFound: false,
        }));
      }
    }
  };

  const matchPartyCharacterToCoords = async (clickedCharacterId: string) => {
    if (clickedCharacterId === 'party-slappy-preview') {
      await matchCharacterToCoords('party-slappy');
    } else {
      const gnomeCoords = await getGnomeCoordsFromDb();
      const DELTA = 3;

      let targetGnome: CharacterInMap | null = null;

      gnomeCoords?.map((gnome) => {
        if (
          clickedCoordinates &&
          isWithinDegrees(DELTA, clickedCoordinates.x, gnome.x) &&
          isWithinDegrees(DELTA, clickedCoordinates.y, gnome.y)
        ) {
          targetGnome = characters.find(
            (ch) => ch.id === gnome.id,
          ) as CharacterInMap;
        }
      });

      if (targetGnome) {
        setCharacters(() =>
          characters.map((mapChar) =>
            mapChar.id === targetGnome?.id
              ? {
                  ...mapChar,
                  isFound: true,
                }
              : mapChar,
          ),
        );

        setPopupVisibility(() => true);
        setCharacterPopupData(() => ({
          character: targetGnome,
          isFound: true,
        }));
      } else {
        setPopupVisibility(() => true);
        setCharacterPopupData(() => ({
          character: targetGnome,
          isFound: false,
        }));
      }
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
          matchPartyCharacterToCoords={matchPartyCharacterToCoords}
        />
      )}

      {isPopupShown && characterPopupData && (
        <CharacterPopup data={characterPopupData} hidePopup={hidePopup} />
      )}
    </div>
  );
}
export default ImageMap;
