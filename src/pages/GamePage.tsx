import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { CharacterProvider } from '../hooks/useCharacters';
import { TimeLapsedProvider } from '../hooks/useTime';

import ImageMap from '../components/ImageMap';
import Overlay from '../components/Overlay';
import GameStartModal from '../components/GameStartModal';
import HeaderInGame from '../components/HeaderInGame';

import { type CharacterInMap, type Map, type MapType } from '../types/types';
import gameData from '../data/gameData';
import ErrorPage from './ErrorPage';

function GamePage() {
  const { mapType } = useParams<{ mapType: MapType }>();

  const [currentGame, setCurrentGame] = useState<Map | null>(null);
  const [isGameStart, setGameStart] = useState(false);
  const [mapCharacters, setMapCharacters] = useState<CharacterInMap[]>();

  useEffect(() => {
    document.title = `${
      mapType?.toUpperCase() || 'New Game'
    } Map - Hidden Hunt`;
  }, []);

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
    <TimeLapsedProvider>
      {!currentGame && <ErrorPage />}
      {currentGame && mapType && mapCharacters && (
        <CharacterProvider mapCharacters={mapCharacters}>
          <HeaderInGame isGameStart={isGameStart} />
          <main className="mx-auto min-h-[80vh]">
            <ImageMap currentGame={currentGame} mapType={mapType} />
          </main>
        </CharacterProvider>
      )}
      <AnimatePresence>
        {currentGame && !isGameStart && (
          <Overlay>
            <GameStartModal
              key="game-start-modal"
              currentGame={currentGame}
              setGameStart={setGameStart}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </TimeLapsedProvider>
  );
}
export default GamePage;
