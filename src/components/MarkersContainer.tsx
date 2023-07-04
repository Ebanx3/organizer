import Marker from "./Marker";

export default function MarkersContainer({
  content,
  removeMarker,
}: {
  content: Content;
  removeMarker: (element: Marker) => void;
}) {
  return (
    <>
      {content.markers.map((marker) => (
        <Marker
          marker={marker}
          key={marker.title}
          removeMarker={removeMarker}
        />
      ))}
    </>
  );
}
