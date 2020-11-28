import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { memo } from "react";
import { useMapContext } from "../context/mapContext";
import { mapStyles } from "../utils";
import Heading from "./Heading";
import InfoBox from "./InfoBox";
import WindTurbine from "./WindTurbine";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 38.359461829793624,
  lng: -100.33554040588162,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const { mapData, selectedMill, setSelectedMill } = useMapContext();

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        options={options}
      >
        <Heading />
        {mapData.map((turbine) => (
          <WindTurbine
            key={turbine.id}
            {...turbine}
            onClick={() => setSelectedMill(turbine)}
          />
        ))}
        {selectedMill && <InfoBox />}
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(Map);
