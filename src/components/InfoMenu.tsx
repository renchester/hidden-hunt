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
      <li
        key={`${ch.id}--info-menu`}
        className="flex flex-col items-center w-16"
      >
        <img
          src={ch.img}
          alt={`Character profile for ${ch.name}`}
          className="aspect-square object-cover rounded-lg"
        />
        <p
          className={`${
            ch.isFound ? 'line-through text-gray-500' : ''
          } font-inter text-center text-sm tracking-wide `}
        >
          {ch.name}
        </p>
      </li>
    ));
  };

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-10 p-10 bg-white rounded-lg text-black shadow-blue-200 shadow-md md:w-3/4 xs:w-full"
      aria-modal
      aria-label="Information Modal on Characters to find"
    >
      <button
        type="button"
        onClick={hideInfoMenu}
        className="absolute top-0 right-0 m-3 font-montserrat bg-gray-500 hover:bg-red-800 focus:bg-red-800 focus:outline-none rounded-full text-white font-extrabold aspect-square h-6 w-6"
        aria-label="Close info modal"
      >
        x
      </button>

      <h1 className="text-2xl font-inter font-extrabold text-rose-500 mb-3">
        Characters to find
      </h1>
      <ul className="flex flex-wrap gap-10 justify-center">
        {mapType === 'party'
          ? renderPartyCharactersInfo()
          : renderCharactersInfo()}
      </ul>
    </div>
  );
}

export default InfoMenu;
