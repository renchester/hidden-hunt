import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useCharacters } from '../hooks/useCharacters';

import InfoMenu from './InfoMenu';
import Stopwatch from './Stopwatch';

type HeaderInGameProps = {
  isGameStart: boolean;
};

function HeaderInGame(props: HeaderInGameProps) {
  const { isGameStart } = props;
  const { characters } = useCharacters();

  const [isInfoMenuShown, setInfoMenuVisibility] = useState(false);

  const charactersLeft = characters.filter((ch) => !ch.isFound);
  const toggleInfoMenu = () => setInfoMenuVisibility(() => !isInfoMenuShown);
  const hideInfoMenu = () => setInfoMenuVisibility(false);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-between items-center p-4 bg-black text-white">
      <Link
        to="/"
        className="flex flex-col gap-2 text-center font-inter pl-2 sm:pl-0"
      >
        <h1 className="text-3xl font-inter font-extrabold leading-6 text-amber-400 sm:text-2xl sm:leading-4">
          Hidden Hunt
        </h1>
        <h2 className="font-inter text-xs">A Seek-and-Find Game</h2>
      </Link>

      <Stopwatch isGameStart={isGameStart} />

      <div className="flex items-center gap-6 sm:gap-2">
        <button
          type="button"
          onClick={toggleInfoMenu}
          className=" rounded-full w-10 h-10  bg-rose-500 aspect-square text-2xl sm:text-lg sm:w-8 sm:h-8 xs:text-sm"
        >
          {charactersLeft.length}
        </button>

        <Link
          to="/leaderboard"
          className="block font-inter uppercase text-xs tracking-widest underline-offset-4 sm:text-xs xs:text-[0.65rem]
          font-bold hover:border-y-4 border-y-amber-400 border-solid py-2 hover:text-amber-400"
        >
          Leaderboard
        </Link>
      </div>

      <AnimatePresence>
        {isGameStart && isInfoMenuShown && (
          <InfoMenu hideInfoMenu={hideInfoMenu} />
        )}
      </AnimatePresence>
    </header>
  );
}
export default HeaderInGame;
