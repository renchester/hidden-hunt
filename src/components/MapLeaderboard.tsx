import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom';
import format from 'date-fns/format';
import fetchLeaderboardFromDB from '../api/fetchLeaderboardFromDB';
import type { LeaderboardData, MapType } from '../types/types';

export const mapLeaderboardLoader = async ({ params }: LoaderFunctionArgs) => {
  const mapType = (params['mapType'] as MapType) || 'space';

  const leaderboardData = await fetchLeaderboardFromDB(mapType);
  return leaderboardData;
};

function MapLeaderboard() {
  const leaderboardData = useLoaderData() as LeaderboardData[];
  const formatSeconds = (time: number) => {
    const seconds = (time / 1000).toString();
    const [integer, decimal] = seconds.split('.');

    const formattedDecimal = decimal?.padEnd(3, '0') || '000';

    return `${integer || '0'}.${formattedDecimal}`;
  };

  return (
    <>
      {leaderboardData.length > 0 && leaderboardData[0] ? (
        <table>
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Time(seconds)</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => {
              const timeInSeconds = formatSeconds(entry.timeLapsed);
              return (
                <tr key={`${entry.name}-${entry.dateCreated.toString()}--lb`}>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{timeInSeconds}</td>
                  <td>{format(entry.dateCreated?.toDate(), 'MMM dd, yyyy')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Nothing here yet</div>
      )}
    </>
  );
}
export default MapLeaderboard;
