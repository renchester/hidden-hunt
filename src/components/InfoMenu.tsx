import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        <li
          key={`${previewChar.id}--info-menu`}
          className="flex flex-col items-center justify-center w-16"
        >
          <img
            src={previewChar.img}
            alt="Character profile for gnomes"
            className="aspect-square object-cover rounded-lg"
          />
          <p className="font-inter text-center text-sm tracking-wide">
            {gnomesToBeFound > 0 && gnomesToBeFound}
            {gnomesToBeFound === 1 ? ' Gnome' : ' Gnomes'}
          </p>
        </li>
      );
    }
    return (
      <li
        key={`${previewChar.id}--info-menu`}
        className="flex flex-col items-center justify-center w-16"
      >
        <img
          src={previewChar.img}
          alt=""
          className="aspect-square object-cover rounded-lg"
        />
        <p className="font-inter text-center text-sm tracking-wide">
          {previewChar.name}
        </p>
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
        className="flex flex-col items-center justify-center w-16"
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
    <motion.div
      className="absolute top-full left-1/2 mt-10 p-10 bg-white rounded-lg text-black shadow-blue-200 shadow-md md:w-3/4 xs:w-full"
      aria-modal
      aria-label="Information Modal on Characters to find"
      initial={{ y: -100, opacity: 0, translateX: '-50%' }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
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
    </motion.div>
  );
}

export default InfoMenu;
