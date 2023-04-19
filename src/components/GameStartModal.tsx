import type { Map } from '../types/types';

type GameStartModalProps = {
  currentGame: Map;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
};

function GameStartModal(props: GameStartModalProps) {
  const { currentGame, setGameStart } = props;

  const handleGameStart = () => setGameStart(true);

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col p-10">
      <h1>{currentGame.title}</h1>
      <h2>{currentGame.instructions}</h2>
      <ul className="flex">
        {currentGame.characters.map((ch) => (
          <li key={`${ch.id}--start-modal`}>
            <img src={ch.img} alt="" />
            <p>{ch.name}</p>
          </li>
        ))}
      </ul>

      <small>NOTE: Clicking start will start the timer</small>
      <button type="button" onClick={handleGameStart}>
        START GAME
      </button>
    </div>
  );
}
export default GameStartModal;
