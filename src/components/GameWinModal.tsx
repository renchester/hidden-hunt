import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTime } from '../hooks/useTime';
import postLeaderboardEntry from '../api/postLeaderboardEntry';
import type { MapType } from '../types/types';

function GameWinModal() {
  const { mapType } = useParams() as { mapType: MapType };

  const { timeLapsed } = useTime();
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [isPosted, setIsPosted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    void (async () => {
      await postLeaderboardEntry(
        {
          name,
          timeLapsed: timeLapsed.actualTime,
        },
        mapType,
      );
    })();

    setIsPosted(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10">
      {isPosted ? (
        <Link to={`/leaderboard/${mapType}`}>Check out the leaderboard</Link>
      ) : (
        <>
          <h1>Congratulations! You found all the characters!</h1>
          <form action="" onSubmit={handleSubmit} ref={formRef}>
            <label htmlFor="userName">
              Enter your name below to be added to the leaderboard!
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your name here"
                minLength={1}
                onChange={handleNameChange}
                value={name}
              />
            </label>
            <button type="submit">Submit to leaderboard</button>
          </form>
        </>
      )}
    </div>
  );
}
export default GameWinModal;
