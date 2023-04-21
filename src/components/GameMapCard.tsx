import { Link } from 'react-router-dom';

import CharacterProfile from './CharacterProfile';
import type { Map } from '../types/types';

type GameMapCardProps = {
  map: Map;
};

function GameMapCard(props: GameMapCardProps) {
  const { map } = props;

  return (
    <article aria-labelledby="map-title" className="relative group font-inter">
      <Link to={map.type} className="">
        <img
          src={map.imgSource}
          alt={`Preview for ${map.title}`}
          className="h-[750px] w-full object-cover grayscale-75 brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-focus-within:grayscale-0
          group-focus-within:brightness-100 transition-[filter] duration-600"
        />
      </Link>
      <div
        className="absolute top-0 bottom-0 w-1/3 flex flex-col justify-end px-10 pb-10 group-hover:bg-amber-400 group-focus-within:bg-amber-400 group-hover:text-black md:group-hover:bg-transparent
       group-focus-within:text-black  text-white xl:w-1/2 md:w-2/3 md:px-5 md:pb-8 sm:w-[400px] md:group-hover:text-white xs:w-[340px]"
      >
        <div className="bg-rose-600 p-5 rounded-md group-hover:bg-transparent group-focus-within:bg-transparent md:group-hover:bg-rose-600 ">
          <h2 id="map-title" className="font-extrabold text-4xl text-left mb-1">
            {map.title}
          </h2>
          <h3 className="mb-4 text-left text-sm ">
            by{' '}
            <a
              href={map.creatorLink}
              rel="noreferrer noopener"
              target="_blank"
              className="focus:outline-none hover:ring-2 focus:ring-2 rounded-sm hover:ring-yellow-800 py-1 focus:ring-yellow-800 italic"
            >
              {map.creator}
            </a>
          </h3>
          <div className="text-sm  bg-yellow-400 text-black w-fit px-2 py-1 rounded-md  font-semibold mb-10 group-hover:bg-orange-700 group-hover:text-white md:group-hover:bg-yellow-400 md:group-hover:text-black">
            {map.difficulty}
          </div>
          <p className="text-sm mb-4 font-raleway">{map.instructions}</p>
          <ul className="flex flex-col gap-6 justify-center px-2">
            {map.type === 'party'
              ? map.previewCharacters?.map((ch) => (
                  <CharacterProfile character={ch} key={`${ch.id}-tag `} />
                ))
              : map.characters.map((ch) => (
                  <CharacterProfile character={ch} key={`${ch.id}-tag `} />
                ))}
          </ul>
        </div>

        <Link
          to={map.type}
          className="w-fit px-4 py-2 bg-violet-600 text-white mt-5 rounded-lg font-extrabold hover:bg-violet-800 focus:bg-violet-800 focus:outline-offset-4 focus:outline-violet-800"
        >
          Play {map.title} map
        </Link>
      </div>
    </article>
  );
}

export default GameMapCard;
