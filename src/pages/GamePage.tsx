import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app as firebaseApp } from '../firebase';

import type { Map } from '../types/types';
import gameData from '../data/gameData';

function GamePage() {
  const { mapType } = useParams();

  const [currentGame, setCurrentGame] = useState<Map | null>(null);
  const mapRef = useRef<HTMLImageElement>(null);

  const db = getFirestore(firebaseApp);

  let characterCoords: { x: number; y: number; id: string }[] = [];

  const getCoordsFromDB = async (mapTitle: string, id: string) => {
    try {
      const characterRef = doc(db, mapTitle, id);
      const characterSnap = await getDoc(characterRef);

      if (characterSnap.exists()) {
        const xCoords = characterSnap.data()['x'] as number;
        const yCoords = characterSnap.data()['y'] as number;

        characterCoords = [...characterCoords, { x: xCoords, y: yCoords, id }];
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error fetching character data:', e);
    }
  };

  useEffect(() => {
    const target = gameData.find((map) => map.type === mapType);

    if (target) setCurrentGame(target);
  }, []);

  useEffect(() => {
    currentGame?.characters.map(async (char) => {
      if (mapType) await getCoordsFromDB(mapType, char.id);

      console.log(characterCoords);
    });

    return () => {
      characterCoords = [];
    };
  }, [currentGame]);

  const logMouseCoords = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const rect = mapRef.current && mapRef.current.getBoundingClientRect();

    if (rect) {
      const clickX = ((e.clientX - rect.x) / rect.width) * 100;
      const clickY = ((e.clientY - rect.y) / rect.height) * 100;

      // Compare characterCoords data to clickX, clickY
    }
  };

  return (
    currentGame && (
      <main className="mx-auto">
        <img
          ref={mapRef}
          src={currentGame.imgSource}
          alt={`Map for ${currentGame.title}`}
          className="mx-auto"
          onClick={logMouseCoords}
        />
      </main>
    )
  );
}
export default GamePage;
