import type { Coordinates } from '../types/types';

type ImageMarkerProps = {
  origin: Coordinates;
};

function ImageMarker(props: ImageMarkerProps) {
  const { origin } = props;

  const markerStyles = {
    left: `${origin.x}%`,
    top: `${origin.y}%`,
  };

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 bg-red-600 bg-opacity-60 rounded-full border-8 border-dashed border-black w-[100px] h-[100px]  "
      style={markerStyles}
    />
  );
}
export default ImageMarker;
