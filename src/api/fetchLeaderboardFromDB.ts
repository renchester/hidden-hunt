import { db } from '../firebase';
import { collection, orderBy, query, limit, getDocs } from 'firebase/firestore';
import type { LeaderboardData, MapType } from '../types/types';

const fetchLeaderboardFromDB = async (mapType: MapType) => {
  try {
    let leaderboard = [] as LeaderboardData[];
    const lbRef = collection(db, `leaderboard/${mapType}/entries`);
    const lbQuery = query(lbRef, orderBy('timeLapsed', 'asc'), limit(100));
    const lbSnap = await getDocs(lbQuery);

    lbSnap.forEach((doc) => {
      const docData = doc.data() as LeaderboardData;
      leaderboard = [...leaderboard, docData];
    });

    return leaderboard;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error fetching leaderboard:', e);
    return null;
  }
};
export default fetchLeaderboardFromDB;

// const lbRef = doc(db, 'leaderboard', mapType);
// const lbSnap = await getDoc(lbRef);

// Sort by time

// if (lbSnap.exists()) {
//   const mapLeaderboard = lbSnap.data()[
//     `${mapType}-leaderboard`
//   ] as LeaderboardData[];

//   return mapLeaderboard;
// } else return null;
