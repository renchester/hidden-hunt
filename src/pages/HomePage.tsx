import Header from '../components/Header';
import GameMapCard from '../components/GameMapCard';

import gameData from '../data/gameData';

function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-[1600px] mx-auto">
        <h1>Choose a map to play on</h1>
        <section className="flex flex-col gap-16 px-10">
          {gameData.map((map) => (
            <GameMapCard map={map} key={`${map.id}-card`} />
          ))}
        </section>
      </main>
    </>
  );
}
export default HomePage;
