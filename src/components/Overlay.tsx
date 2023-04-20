import type { ReactNode } from 'react';

type OverlayProps = {
  children?: ReactNode;
  hideModal?: () => void;
};

function Overlay(props: OverlayProps) {
  const { children, hideModal } = props;

  return (
    <div
      className="fixed z-20 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40"
      onClick={hideModal}
    >
      {children}
    </div>
  );
}
export default Overlay;
