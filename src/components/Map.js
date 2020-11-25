import React from "react";
import { GoogleMap, LoadScript, InfoWindow } from "@react-google-maps/api";
import mapStyles from "./MapStyles";
import { useMapContext } from "../context/mapContext";
import InfoBox from "./InfoBox";
import WindMill from "./WindMill";

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

const iconOptions = {
  url: "/windmill.svg",
};

const Map = () => {
  const { loading, mapData, selectedMill, setSelectedMill } = useMapContext();

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        options={options}
      >
        {mapData.map((item) => (
          <WindMill
            key={item.id}
            {...item}
            onClick={() => setSelectedMill(item)}
          />
        ))}
        {selectedMill && <InfoBox />}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);

/* return (
  <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      <Marker
        position={position}
        label={text}
        icon={{
          url: `/bear.svg`,
        }}
      />
    </GoogleMap>
  </LoadScript>
); */
