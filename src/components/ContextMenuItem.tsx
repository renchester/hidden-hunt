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
      className="flex hover:bg-rose-700 w-full p-2 gap-1"
      onClick={handleClick}
    >
      <img
        src={character.img}
        alt={`Character profile for ${character.name}`}
        className="w-[25px] h-[25px] rounded-full"
      />
      <p aria-label="Character name" className="text-left max-w-[170px]">
        {character.name}
      </p>
    </button>
  );
}

export default ContextMenuItem;
