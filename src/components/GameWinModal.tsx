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
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 p-10 rounded-lg text-center md:w-3/4"
      aria-label="Modal to display Congratulations for finding all characters"
      aria-modal
    >
      {isPosted ? (
        <div className="flex flex-col gap-5">
          <Link
            to={`/leaderboard/${mapType}`}
            className="px-4 py-2 rounded-md font-inter font-extrabold bg-rose-500 text-white"
          >
            Check out the leaderboard
          </Link>
          <Link
            to={'/'}
            className="px-4 py-2 rounded-md font-inter font-extrabold bg-green-600 text-white"
          >
            Go back home
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-inter font-extrabold">
            Congratulations! You found all the characters!
          </h1>
          <form
            action=""
            onSubmit={handleSubmit}
            ref={formRef}
            className="flex flex-col justify-center items-center gap-2 mt-2"
          >
            <label htmlFor="userName">
              Enter your name below to be added to the leaderboard!
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name here"
              minLength={1}
              maxLength={50}
              required
              onChange={handleNameChange}
              value={name}
              className="bg-transparent placeholder:text-gray-600 px-2 py-1 w-2/3 focus:outline-none focus:bg-gray-50 border-b-2 border-b-black mb-3"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-green-600 w-fit rounded-lg font-inter font-bold text-white"
            >
              Submit to leaderboard
            </button>
          </form>
        </>
      )}
    </div>
  );
}
export default GameWinModal;
