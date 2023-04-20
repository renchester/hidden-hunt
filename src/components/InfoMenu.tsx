import { useParams } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import type { Character, MapType } from '../types/types';
import gameData from '../data/gameData';

type InfoMenuProps = {
  hideInfoMenu: () => void;
};

function InfoMenu(props: InfoMenuProps) {
  const { hideInfoMenu } = props;
  const { mapType } = useParams<{ mapType: MapType }>();

  const { characters } = useCharacters();

  const renderProfile = (previewChar: Character) => {
    const gnomesToBeFound = characters.filter(
      (ch) => ch.isGnome && !ch.isFound,
    ).length;

    if (previewChar.isGnome) {
      return (
        <li key={`${previewChar.id}--info-menu`} className="flex flex-col">
          <img src={previewChar.img} alt="" className="w-16" />
          <p>
            {gnomesToBeFound > 0 && gnomesToBeFound} {previewChar.name}
          </p>
        </li>
      );
    }
    return (
      <li key={`${previewChar.id}--info-menu`} className="flex flex-col">
        <img src={previewChar.img} alt="" className="w-16" />
        <p>{previewChar.name}</p>
      </li>
    );
  };

  const renderPartyCharactersInfo = () => {
    const partyMap = gameData.find((map) => map.type === 'party');
    const charsToRender = partyMap?.previewCharacters;

    if (charsToRender) {
      return charsToRender.map((ch) => renderProfile(ch));
    }
    return '';
  };

  const renderCharactersInfo = () => {
    return characters.map((ch) => (
      <li key={`${ch.id}--info-menu`} className="flex flex-col">
        <img src={ch.img} alt="" className="w-16" />
        <p>{ch.name}</p>
      </li>
    ));
  };

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-10 p-10 bg-purple-300 ">
      <button
        type="button"
        onClick={hideInfoMenu}
        className="absolute top-0 right-0"
      >
        X
      </button>
      <ul className="flex">
        {mapType === 'party'
          ? renderPartyCharactersInfo()
          : renderCharactersInfo()}
      </ul>
    </div>
  );
}

export default InfoMenu;
