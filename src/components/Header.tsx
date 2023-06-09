import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full py-6 bg-violet-900 text-white flex justify-center">
      <div className="max-w-[1600px] w-full flex gap-10 justify-between items-center mr-4">
        <Link
          to="/"
          className="flex flex-col gap-2 text-center font-inter pl-2"
          aria-label="Link to Home Page"
        >
          <h1 className="text-3xl font-inter font-extrabold leading-6 text-amber-400">
            Hidden Hunt
          </h1>
          <h2 className="font-inter  text-xs">A Seek-and-Find Game</h2>
        </Link>
        <Link
          to="/leaderboard"
          className="block font-inter font-bold uppercase text-xs tracking-[2.5px]  hover:border-y-4 border-y-amber-400 border-solid py-2 hover:text-amber-400 underline-offset-4"
          aria-label="Link to Leaderboard Page"
        >
          Leaderboard
        </Link>
      </div>
    </header>
  );
}
export default Header;
