import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import Pointers from "./Pointers";

const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY;
const mapId = import.meta.env.GOOGLE_MAPS_ID;

console.log("apiKey, mapId", apiKey, mapId);

type AddressCordinates = google.maps.LatLngLiteral;

const MainMapComp = () => {
  const addressCords: AddressCordinates = {
    lat: 41.32736053942958,
    lng: 19.818195097218243,
  };
  return (
    <>
      {apiKey ? (
        <APIProvider
          apiKey={apiKey}
          onLoad={() => console.log("Maps API has loaded.")}
        >
          <Map
            defaultZoom={13}
            mapId={mapId}
            defaultCenter={addressCords}
            onCameraChanged={(ev: MapCameraChangedEvent) =>
              console.log(
                "camera changed:",
                ev.detail.center,
                "zoom:",
                ev.detail.zoom
              )
            }
          >
            <Pointers />
          </Map>
        </APIProvider>
      ) : (
        <div>Error with loading map </div>
      )}
    </>
  );
};

export default MainMapComp;
