import { Link } from 'react-router-dom';

import CharacterProfile from './CharacterProfile';
import type { Map } from '../types/types';

type GameMapCardProps = {
  map: Map;
};

function GameMapCard(props: GameMapCardProps) {
  const { map } = props;

  return (
    <article aria-labelledby="map-title" className="relative group">
      <Link to={map.type}>
        <img
          src={map.imgSource}
          alt={`Preview for ${map.title}`}
          className="h-[600px] w-full object-cover rounded-lg grayscale-75 brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-focus-within:grayscale-0 transition-[filter] duration-600"
        />
      </Link>
      <div className="absolute top-0 bottom-0 w-1/3 flex flex-col justify-end pl-8 group-hover:bg-blue-300 font-inter text-white ">
        <h2 id="map-title" className="font-semibold text-4xl text-left">
          {map.title}
        </h2>
        <h3 className="mb-3 text-left text-sm ">
          by{' '}
          <a href={map.creatorLink} rel="noreferrer noopener" target="_blank">
            {map.creator}
          </a>
        </h3>
        <p>{map.instructions}</p>
        <ul className="flex flex-col gap-6 justify-center px-2">
          {map.type === 'party'
            ? map.previewCharacters?.map((ch) => (
                <CharacterProfile character={ch} key={`${ch.id}-tag `} />
              ))
            : map.characters.map((ch) => (
                <CharacterProfile character={ch} key={`${ch.id}-tag `} />
              ))}
        </ul>
        <Link to={map.type}>Play {map.title} map</Link>
      </div>
    </article>
  );
}

export default GameMapCard;
