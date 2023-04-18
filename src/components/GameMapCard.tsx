import CharacterProfile from './CharacterProfile';
import type { Map } from '../types/types';

type GameMapCardProps = {
  map: Map;
};

function GameMapCard(props: GameMapCardProps) {
  const { map } = props;

  return (
    <article aria-labelledby="map-title" className="group w-1/3">
      <img
        src={map.imgSource}
        alt={`Preview for ${map.title}`}
        className="h-1/3 w-full object-cover grayscale group-hover:grayscale-0 group-focus-within:grayscale-0 transition-[filter] duration-600"
      />

      <div>
        <h2 id="map-title">{map.title}</h2>
        <h3>by {map.creator}</h3>

        <p>{map.instructions}</p>

        <ul>
          {map.type === 'party'
            ? map.previewCharacters?.map((ch) => (
                <CharacterProfile character={ch} key={`${ch.id}-tag `} />
              ))
            : map.characters.map((ch) => (
                <CharacterProfile character={ch} key={`${ch.id}-tag `} />
              ))}
        </ul>
      </div>
    </article>
  );
}

export default GameMapCard;
