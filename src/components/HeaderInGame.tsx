import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/" className="flex flex-col gap-2 text-center font-inter pl-2">
        <h1 className="text-3xl font-inter font-extrabold leading-6 text-amber-400">
          Hidden Hunt
        </h1>
        <h2 className="font-inter  text-xs">A Seek-and-Find Game</h2>
      </Link>

      <Stopwatch isGameStart={isGameStart} />

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={toggleInfoMenu}
          className=" rounded-full w-10 h-10  bg-rose-500 aspect-square text-2xl"
        >
          {charactersLeft.length}
        </button>

        <Link
          to="/leaderboard"
          className="block font-inter uppercase text-sm tracking-wider hover:underline underline-offset-4"
        >
          Leaderboard
        </Link>
      </div>

      {isGameStart && isInfoMenuShown && (
        <InfoMenu hideInfoMenu={hideInfoMenu} />
      )}
    </header>
  );
}
export default HeaderInGame;
