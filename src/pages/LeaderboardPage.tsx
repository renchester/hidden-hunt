import { useEffect } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import Header from '../components/Header';
import gameData from '../data/gameData';

function LeaderboardPage() {
  useEffect(() => {
    document.title = 'Leaderboards - Hidden Hunt';
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-[80vh]">
        <h1 className="text-2xl font-inter text-center mt-12 mb-8 font-extrabold uppercase tracking-widest text-rose-500">
          Leaderboards
        </h1>
        <ul className="flex justify-around gap-6 px-10 max-w-[1600px] mx-auto md:flex-col md:gap-0">
          {gameData.map((map) => (
            <li
              key={`${map.id}--leaderboard-select`}
              className="w-1/3 relative md:w-full"
            >
              <NavLink to={map.type} className="group">
                {({ isActive }) => (
                  <>
                    <h2 className="absolute z-10 px-4  bg-rose-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center font-inter font-extrabold text-white rounded-md md:-translate-y-2/3">
                      {map.title}
                    </h2>
                    <img
                      src={map.imgSource}
                      alt=""
                      className={`h-[240px] md:h-[120px] w-full object-cover rounded-lg group-hover:grayscale-0 ${
                        isActive ? 'grayscale-0' : 'grayscale'
                      }`}
                    />
                  </>
                )}
              </NavLink>
              <Link
                to={`/${map.type}`}
                className="px-2 py-1 bg-violet-600 mt-1 font-inter block w-fit rounded-md text-xs text-white font-extrabold tracking-wide text-center md:invisible"
              >
                Play {map.title}
              </Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </main>
    </>
  );
}
export default LeaderboardPage;
