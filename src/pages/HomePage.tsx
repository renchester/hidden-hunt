import Header from '../components/Header';
import GameMapCard from '../components/GameMapCard';

import { useEffect } from 'react';
import gameData from '../data/gameData';
import heroChooseImg from '../assets/img/hero-choose.webp';

function HomePage() {
  useEffect(() => {
    document.title = 'Home Page - Hidden Hunt';
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-[1600px] mx-auto">
        <section
          className="flex sm:flex-col justify-center items-center my-20"
          aria-labelledby="hero-title"
        >
          <div className="flex flex-col items-center justify-center w-1/3 max-w-md gap-6 sm:w-4/5">
            <h1
              className="w-full text-left text-4xl font-inter font-extrabold uppercase bg-rose-500 px-6 py-2 text-white rounded-md leading-[1.2em]"
              id="hero-title"
            >
              Choose a map to play on
            </h1>
            <p className="font-inter text-sm tracking-wide">
              To start, you will be given a list of characters to find.{' '}
              <span className="underline underline-offset-2 font-bold">
                Find all the characters as quick as you can
              </span>{' '}
              and beat the scores in the leaderboard!
            </p>
          </div>

          <a
            href="https://dribbble.com/tatooinegirl"
            rel="noopener noreferrer"
            target="_blank"
            className="flex flex-col justify-end items-end"
          >
            <img
              src={heroChooseImg}
              alt="Drawing of two characters in search"
              className="w-96 h-auto"
            />
            <small className="text-[0.65rem] italic">by Tatooinegirl</small>
          </a>
        </section>
        <section
          className="flex flex-col gap-24 mb-20"
          aria-label="Selection of maps"
        >
          {gameData.map((map) => (
            <GameMapCard map={map} key={`${map.id}-card`} />
          ))}
        </section>
      </main>
    </>
  );
}
export default HomePage;
