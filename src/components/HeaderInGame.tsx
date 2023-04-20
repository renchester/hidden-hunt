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
    <header className="sticky top-0 z-50 w-full flex justify-between p-4 bg-slate-500">
      <Link to="/" className="flex-col">
        <h1 className="text-2xl font-poppins font-extrabold">Hidden Hunt</h1>
        <h2>Search for characters</h2>
      </Link>

      <Stopwatch isGameStart={isGameStart} />

      <div className="flex">
        <button type="button" onClick={toggleInfoMenu} className="p-2 bg-white">
          {charactersLeft.length}
        </button>

        <button type="button" className="bg-red-300">
          Info
        </button>
        <button type="button" className="bg-red-100">
          Leaderboard
        </button>
      </div>

      {isGameStart && isInfoMenuShown && (
        <InfoMenu hideInfoMenu={hideInfoMenu} />
      )}
    </header>
  );
}
export default HeaderInGame;
