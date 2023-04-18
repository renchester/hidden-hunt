import type { Character } from '../types/types';

type CharacterProfileType = {
  character: Character;
};

function CharacterProfile(props: CharacterProfileType) {
  const { character } = props;

  return (
    <li key={`${character.id}-card`}>
      <img
        src={character.img}
        alt={`Character profile for ${character.name}`}
        className="w-40 h-40 object-cover rounded-full"
      />
      <h4>{character.name}</h4>
    </li>
  );
}
export default CharacterProfile;
