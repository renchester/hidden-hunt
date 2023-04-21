import type { Coordinates } from '../types/types';

type FoundMarkersProps = {
  markerCoords: Coordinates;
};

function FoundMarkers(props: FoundMarkersProps) {
  const { markerCoords } = props;

  const markerStyle = {
    left: `${markerCoords.x}%`,
    top: `${markerCoords.y}%`,
  };

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 w-[5vw] h-[5vw] bg-green-100 rounded-full bg-opacity-60 border-2 border-dashed"
      style={markerStyle}
    />
  );
}
export default FoundMarkers;
