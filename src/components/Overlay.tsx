import type { ReactNode } from 'react';

function Overlay({ children }: { children?: ReactNode }) {
  return (
    <div className="fixed z-20 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40">
      {children}
    </div>
  );
}
export default Overlay;
