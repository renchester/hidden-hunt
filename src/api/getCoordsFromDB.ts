import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const getCoordsFromDB = async (mapTitle: string, id: string) => {
  try {
    const characterRef = doc(db, mapTitle, id);
    const characterSnap = await getDoc(characterRef);

    if (characterSnap.exists()) {
      const xCoords = characterSnap.data()['x'] as number;
      const yCoords = characterSnap.data()['y'] as number;

      return { x: xCoords, y: yCoords };
    } else return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error fetching character data:', e);
    return null;
  }
};

export default getCoordsFromDB;
