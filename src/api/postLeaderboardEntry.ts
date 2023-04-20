import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

import type { LeaderboardData, MapType } from '../types/types';

const postLeaderboardEntry = async (
  data: Omit<LeaderboardData, 'dateCreated'>,
  mapType: MapType,
) => {
  try {
    const dateCreated = serverTimestamp();
    const lbRef = doc(
      db,
      `leaderboard/${mapType}/entries`,
      `${data.name}-${new Date().toString()}`,
    );

    const newData = { ...data, dateCreated };

    await setDoc(lbRef, newData);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Error posting to leaderboard`, e);
  }
};
export default postLeaderboardEntry;

// CHECK IF DOC ALREADY EXISTS

//   const lbSnap = await getDoc(lbRef);

//   if (lbSnap.exists()) {
//     const newLb;
//   }
