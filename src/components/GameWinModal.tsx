import { Link } from 'react-router-dom';

type GameWinModalProps = {
  isWinner: boolean;
};

function GameWinModal(props: GameWinModalProps) {
  const { isWinner } = props;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10">
      {isWinner ? (
        <>
          <h1>Congratulations! You found all the characters!</h1>
          <form action="">
            <label htmlFor="userName">
              Enter your name below to be added to the leaderboard!
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your name here"
                minLength={1}
              />
            </label>
            <button type="submit">Submit to leaderboard</button>
          </form>
        </>
      ) : (
        <div>
          <h1>Huh, how did you get here?</h1>
          <Link to="/">Go back to Home</Link>
        </div>
      )}
    </div>
  );
}
export default GameWinModal;
