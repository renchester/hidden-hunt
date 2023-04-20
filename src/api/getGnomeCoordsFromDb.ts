import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import type { GnomeCoords } from '../types/types';

const getGnomeCoordsFromDb = async () => {
  try {
    let gnomeCoords: GnomeCoords[] = [];
    const partyRef = collection(db, 'party');
    const gnomesQuery = query(partyRef, where('isGnome', '==', true));
    const querySnapshot = await getDocs(gnomesQuery);

    querySnapshot.forEach((doc) => {
      gnomeCoords = [
        ...gnomeCoords,
        {
          id: doc.id,
          x: doc.data()['x'] as number,
          y: doc.data()['y'] as number,
          isGnome: doc.data()['isGnome'] as boolean,
        },
      ];
    });

    return gnomeCoords;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Trouble getting gnome coordinates', e);
    return null;
  }
};

export default getGnomeCoordsFromDb;
