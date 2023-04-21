import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full py-6 bg-black text-white flex justify-center">
      <div className="max-w-[1600px] w-full flex gap-10 justify-between items-center mr-4">
        <Link
          to="/"
          className="flex flex-col gap-2 text-center font-inter pl-2"
        >
          <h1 className="text-3xl font-inter font-extrabold leading-6 text-amber-400">
            Hidden Hunt
          </h1>
          <h2 className="font-inter  text-xs">A Seek-and-Find Game</h2>
        </Link>
        <Link
          to="/leaderboard"
          className="block font-inter uppercase text-sm tracking-wider hover:underline underline-offset-4"
        >
          Leaderboard
        </Link>
      </div>
    </header>
  );
}
export default Header;
