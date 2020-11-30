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
  lat: 64.77816373194928,
  lng: -156.0464243475145,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const {
    mapData,
    selectedMill,
    setSelectedMill,
    handleCloseClick,
    handleHeadingClose,
  } = useMapContext();

  const handleClick = (selectedTurbine) => {
    setSelectedMill(selectedTurbine);
    handleCloseClick();
    handleHeadingClose();
  };

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
            onClick={() => handleClick(turbine)}
          />
        ))}
        {selectedMill && <InfoBox />}
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(Map);
