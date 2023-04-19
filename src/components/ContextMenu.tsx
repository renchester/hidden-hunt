import { useCharacters } from '../hooks/useCharacters';
import type { Coordinates } from '../types/types';
import ContextMenuItem from './ContextMenuItem';

type ContextMenuProps = {
  clickedCoordinates: Coordinates;
  hideMenu: () => void;
  matchCharacterToCoords: (id: string) => Promise<void>;
};

function ContextMenu(props: ContextMenuProps) {
  const { clickedCoordinates, hideMenu, matchCharacterToCoords } = props;
  const { characters } = useCharacters();

  const getTransformStyle = () => {
    let transformStyle = '';

    if (clickedCoordinates.x >= 80) {
      transformStyle = 'translateX(-100%)';
    }

    if (clickedCoordinates.y >= 80) {
      transformStyle = 'translateY(-100%)';
    }

    if (clickedCoordinates.x >= 70 && clickedCoordinates.y >= 70) {
      transformStyle = 'translate(-100%, -100%)';
    }

    return transformStyle;
  };

  const menuStyle = {
    left: `${clickedCoordinates.x}%`,
    top: `${clickedCoordinates.y}%`,
    transform: getTransformStyle(),
  };

  return (
    <div
      role="menu"
      aria-expanded="true"
      aria-orientation="vertical"
      className="absolute z-10 bg-white w-fit"
      style={menuStyle}
    >
      <ul className="flex flex-col">
        {characters.map((ch) => (
          <li key={`${ch.id}--menu-item`}>
            <ContextMenuItem
              hideMenu={hideMenu}
              character={ch}
              matchCharacterToCoords={matchCharacterToCoords}
            />
          </li>
        ))}
      </ul>
      <button type="button" onClick={hideMenu}>
        Hide Menu
      </button>
    </div>
  );
}
export default ContextMenu;