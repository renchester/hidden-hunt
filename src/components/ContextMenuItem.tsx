import type { Character } from '../types/types';

type ContextMenuItemProps = {
  character: Character;
  hideMenu: () => void;
  matchCharacterToCoords: (id: string) => Promise<void>;
};

function ContextMenuItem(props: ContextMenuItemProps) {
  const { character, hideMenu, matchCharacterToCoords } = props;

  const handleClick = () => {
    void (async () => {
      await matchCharacterToCoords(character.id);
    })();

    hideMenu();
  };

  return (
    <button
      type="button"
      className="flex hover:bg-yellow-300 w-full"
      onClick={handleClick}
    >
      <img
        src={character.img}
        alt={`Character profile for ${character.name}`}
        className="w-[15px] h-[15px]"
      />
      <p aria-label="Character name">{character.name}</p>
    </button>
  );
}

export default ContextMenuItem;
