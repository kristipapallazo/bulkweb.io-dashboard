import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

interface Pointer {
  key: string;
  location: google.maps.LatLngLiteral;
}
type Pointers = Pointer[];

const pointers: Pointers = [
  {
    key: "Qendra Zayed",
    location: { lat: 41.31898837813951, lng: 19.8134019186025 },
  },
  {
    key: "Bulevardi i Ri",
    location: { lat: 41.336523, lng: 19.81604 },
  },

  {
    key: "Parku Rinia",
    location: { lat: 41.325368521723156, lng: 19.818217623222463 },
  },
];

const Pointers = () => {
  return (
    <>
      {pointers.map((poi: Pointer) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default Pointers;
