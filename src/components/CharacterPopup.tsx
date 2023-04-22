import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { CharacterPopupData } from '../types/types';

type CharacterPopupProps = {
  data: CharacterPopupData;
  hidePopup: () => void;
};

function CharacterPopup(props: CharacterPopupProps) {
  const { data, hidePopup } = props;

  const popupMessage =
    data.isFound && data.character
      ? `You found ${data.character.name}`
      : `Try again. ${
          data.character?.name || 'The character you chose'
        } is not there `;

  const backgroundColor = data.isFound ? 'bg-green-600' : 'bg-red-700';

  useEffect(() => {
    const popupTimeout = setTimeout(hidePopup, 3500);

    return () => clearTimeout(popupTimeout);
  }, []);

  return (
    <motion.div
      className={`${backgroundColor} fixed top-36 z-50 mx-auto px-10 py-2 text-white left-1/2 rounded-md border border-solid border-white font-inter font-extrabold md:px-2 bg-opacity-90`}
      role="alert"
      aria-live="assertive"
      initial={{ y: -200, opacity: 0, translateX: '-50%' }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
    >
      {popupMessage}
    </motion.div>
  );
}

export default CharacterPopup;
