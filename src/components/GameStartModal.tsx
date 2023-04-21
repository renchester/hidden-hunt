import { useNavigate } from 'react-router-dom';
import type { Character, Map } from '../types/types';

type GameStartModalProps = {
  currentGame: Map;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
};

function GameStartModal(props: GameStartModalProps) {
  const { currentGame, setGameStart } = props;
  const navigate = useNavigate();

  const handleGameStart = () => setGameStart(true);

  const renderProfile = (character: Character) => (
    <li
      key={`${character.id}--start-modal`}
      className="flex-shrink-0 w-[120px]"
    >
      <img
        src={character.img}
        alt={`Character profile for ${character.name}`}
        className="aspect-square object-cover rounded-lg shadow-sm shadow-gray-400 outline outline-[4px] outline-amber-50 mb-1"
      />
      <p className="text-center text-sm leading-4 font-montserrat tracking-wide font-bold text-gray-700">
        {character.isGnome ? `12 Gnomes` : character.name}
      </p>
    </li>
  );

  return (
    <div
      className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col py-8 px-10 rounded-xl text-center font-inter shadow-lg shadow-gray-500"
      aria-label="Modal to start game"
      aria-modal
    >
      <h1 className="font-inter text-3xl font-extrabold text-rose-600 mb-1">
        {currentGame.title}
      </h1>
      <h2 className="mb-5">{currentGame.instructions}</h2>
      <ul className="flex flex-wrap justify-center gap-6 min-w-[400px] mb-10">
        {currentGame.type === 'party'
          ? currentGame.previewCharacters?.map((ch) => renderProfile(ch))
          : currentGame.characters.map((ch) => renderProfile(ch))}
      </ul>

      <small className="text-xs text-gray-800 font-poppins">
        NOTE: This game is much better played in full-screen mode
      </small>
      <div className="flex justify-center gap-3 mt-1">
        <button
          type="button"
          onClick={handleGameStart}
          className="block px-4 py-2 bg-green-600 rounded-lg font-extrabold text-white text-md focus:bg-green-700 hover:bg-green-700 focus:outline-none"
        >
          START GAME
        </button>
        <button
          onClick={() => navigate(-1)}
          className="block  px-4 py-2 bg-gray-400 rounded-lg font-extrabold text-white text-md focus:bg-gray-600 hover:bg-gray-600 focus:outline-none"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
}
export default GameStartModal;
