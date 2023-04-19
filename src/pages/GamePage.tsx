import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CharacterProvider } from '../hooks/useCharacters';
import { type CharacterInMap, type Map, type MapType } from '../types/types';
import gameData from '../data/gameData';
import ImageMap from '../components/ImageMap';

function GamePage() {
  const { mapType } = useParams<{ mapType: MapType }>();

  const [currentGame, setCurrentGame] = useState<Map | null>(null);
  const [mapCharacters, setMapCharacters] = useState<CharacterInMap[]>();

  useEffect(() => {
    const target = gameData.find((map) => map.type === mapType);

    if (target) setCurrentGame(target);
  }, []);

  useEffect(() => {
    setMapCharacters(
      currentGame?.characters.map((ch) => ({ ...ch, isFound: false })),
    );
  }, [currentGame]);

  return (
    currentGame &&
    mapType &&
    mapCharacters && (
      <main className="mx-auto">
        <CharacterProvider mapCharacters={mapCharacters}>
          <ImageMap currentGame={currentGame} mapType={mapType} />
        </CharacterProvider>
      </main>
    )
  );
}
export default GamePage;
