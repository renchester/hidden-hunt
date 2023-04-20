import { useEffect } from 'react';
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
      : 'Try again';

  useEffect(() => {
    const popupTimeout = setTimeout(hidePopup, 3500);

    return () => clearTimeout(popupTimeout);
  }, []);

  return (
    <div className="fixed top-36 z-60 mx-auto bg-green-600 px-10 py-2 text-white left-1/2 -translate-x-1/2 ">
      {popupMessage}
    </div>
  );
}

export default CharacterPopup;
