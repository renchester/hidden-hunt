import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';

type HeaderInGameProps = {
  isGameStart: boolean;
};

function HeaderInGame(props: HeaderInGameProps) {
  const { isGameStart } = props;
  const { characters } = useCharacters();

  const [isInfoMenuShown, setInfoMenuVisibility] = useState(false);

  const toggleInfoMenu = () => setInfoMenuVisibility(() => !isInfoMenuShown);
  const showInfoMenu = () => setInfoMenuVisibility(true);
  const hideInfoMenu = () => setInfoMenuVisibility(false);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-between p-4 bg-slate-500">
      <Link to="/" className="flex-col">
        <h1 className="text-2xl font-poppins font-extrabold">Hidden Hunt</h1>
        <h2>Search for characters</h2>
      </Link>

      <div className="flex">
        <button type="button" onClick={toggleInfoMenu} className="p-2 bg-white">
          3
        </button>

        <button type="button" className="bg-red-300">
          Info
        </button>
        <button type="button" className="bg-red-100">
          Leaderboard
        </button>
      </div>

      {isGameStart && isInfoMenuShown && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-10 p-10 bg-purple-300 ">
          <button
            type="button"
            onClick={hideInfoMenu}
            className="absolute top-0 right-0"
          >
            X
          </button>
          <ul className="flex">
            {characters.map((ch) => (
              <li key={`${ch.id}--info-menu`} className="flex flex-col">
                {/* SHow strikethorugh if char is found */}
                <img src={ch.img} alt="" className="w-16" />
                <p>{ch.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
export default HeaderInGame;

//   {characters.filter((ch) => !ch.isFound).length}
// </button>;

//  {
//    isInfoMenuShown && (
//      <div className="absolute bottom-0">
//        {characters.map((ch) => (
//          <div key={`${ch.id}--info-menu`}>
//            <img src={ch.img} alt="" width={40} />
//            <p>{ch.name}</p>
//          </div>
//        ))}
//      </div>
//    );
//  }
