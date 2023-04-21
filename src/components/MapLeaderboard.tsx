import {
  useLoaderData,
  type LoaderFunctionArgs,
  useParams,
} from 'react-router-dom';
import format from 'date-fns/format';
import fetchLeaderboardFromDB from '../api/fetchLeaderboardFromDB';
import type { LeaderboardData, MapType } from '../types/types';
import gameData from '../data/gameData';

export const mapLeaderboardLoader = async ({ params }: LoaderFunctionArgs) => {
  const mapType = (params['mapType'] as MapType) || 'space';

  const leaderboardData = await fetchLeaderboardFromDB(mapType);
  return leaderboardData;
};

function MapLeaderboard() {
  const leaderboardData = useLoaderData() as LeaderboardData[];
  const { mapType } = useParams() as { mapType: MapType };

  const formatSeconds = (time: number) => {
    const seconds = (time / 1000).toString();
    const [integer, decimal] = seconds.split('.');

    const formattedDecimal = decimal?.padEnd(3, '0') || '000';

    return `${integer || '0'}.${formattedDecimal}`;
  };

  const mapTitle = gameData.find((map) => map.type === mapType)?.title;

  return (
    <>
      <h1 className="text-center font-extrabold font-inter uppercase mt-10 mb-6">
        {mapTitle}
      </h1>
      {leaderboardData.length > 0 && leaderboardData[0] ? (
        <table className="max-w-[1200px] mx-auto font-inter border-collapse w-full mb-20">
          <thead className="border-y border-solid border-black">
            <tr>
              <th scope="col" className="text-center font-bold py-1">
                Rank
              </th>
              <th scope="col" className="text-left font-bold py-1 md:pl-2">
                Name
              </th>
              <th scope="col" className="text-center font-bold py-1 leading-3">
                Time
                <br />
                <span className="text-xs font-normal">(seconds)</span>
              </th>
              <th scope="col" className="text-left font-bold py-1 pl-8">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="">
            {leaderboardData.map((entry, index) => {
              const timeInSeconds = formatSeconds(entry.timeLapsed);
              return (
                <tr
                  key={`${entry.name}-${entry.dateCreated.toString()}--lb`}
                  className=" even:bg-gray-100 last-of-type:border-b border-solid border-black"
                >
                  <td className="text-center py-5 w-1/5 md:w-fit md:pl-2">
                    {index + 1}
                  </td>
                  <td className="w-1/3 md:w-fit">{entry.name}</td>
                  <td className="font-roboto text-center w-1/5 md:w-fit">
                    {timeInSeconds}
                  </td>
                  <td className="pl-8 md:pb-4 md:w-fit">
                    {format(entry.dateCreated?.toDate(), 'MMM dd, yyyy')}
                  </td>
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
