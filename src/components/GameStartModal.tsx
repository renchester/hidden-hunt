import { Link } from 'react-router-dom';
import type { Character, Map } from '../types/types';

type GameStartModalProps = {
  currentGame: Map;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
};

function GameStartModal(props: GameStartModalProps) {
  const { currentGame, setGameStart } = props;

  const handleGameStart = () => setGameStart(true);

  const renderProfile = (character: Character) => (
    <li key={`${character.id}--start-modal`}>
      <img src={character.img} alt="" />
      <p>{character.isGnome ? `12 Gnomes` : character.name}</p>
    </li>
  );

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col p-10">
      <h1>{currentGame.title}</h1>
      <h2>{currentGame.instructions}</h2>
      <ul className="flex">
        {currentGame.type === 'party'
          ? currentGame.previewCharacters?.map((ch) => renderProfile(ch))
          : currentGame.characters.map((ch) => renderProfile(ch))}
      </ul>

      <small>NOTE: Clicking start will start the timer</small>
      <button type="button" onClick={handleGameStart}>
        START GAME
      </button>
      <Link to="/">GO BACK</Link>
    </div>
  );
}
export default GameStartModal;
