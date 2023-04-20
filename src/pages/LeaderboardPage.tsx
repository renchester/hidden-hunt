import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';
import gameData from '../data/gameData';

function LeaderboardPage() {
  return (
    <>
      <Header />
      <ul className="flex justify-around gap-2">
        {gameData.map((map) => (
          <li key={`${map.id}--leaderboard-select`} className="w-1/3">
            <Link to={map.type} className="block bg-blue-200">
              <h1>{map.title}</h1>
              <img
                src={map.imgSource}
                alt=""
                className="h-[200px] w-full object-cover "
              />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
export default LeaderboardPage;
