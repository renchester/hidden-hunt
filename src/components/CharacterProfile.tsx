import type { Character } from '../types/types';

type CharacterProfileType = {
  character: Character;
};

function CharacterProfile(props: CharacterProfileType) {
  const { character } = props;

  return (
    <li className="flex items-center gap-2" key={`${character.id}-card`}>
      <img
        src={character.img}
        alt={`Character profile for ${character.name}`}
        className="w-[50px] h-[50px] object-cover rounded-full border-2 border-white border-solid group-hover:border-black group-hover:border-0 md:group-hover:border-white md:group-hover:border-2"
      />
      <h4 className="text-left text-md w-2/3 font-raleway tracking-tight">
        {character.name}
      </h4>
    </li>
  );
}
export default CharacterProfile;
