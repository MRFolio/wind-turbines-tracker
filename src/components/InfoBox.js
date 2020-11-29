import { InfoWindow } from "@react-google-maps/api";
import { useMapContext } from "../context/mapContext";
import InfoItem from "./InfoItem";

const InfoBox = () => {
  const { selectedMill, setSelectedMill, handleCloseClick } = useMapContext();

  const options = {
    minWidth: 320,
    pixelOffset: {
      width: 3,
      height: -26,
    },
  };

  const { name, lng, lat } = selectedMill;

  const position = {
    lat,
    lng,
  };

  const handleClose = () => {
    setSelectedMill(null);
    handleCloseClick();
  };

  return (
    <InfoWindow
      position={position}
      onCloseClick={handleClose}
      options={options}
      zIndex={10}
    >
      <div className="infoBox">
        <h2 className="boxTitle">{name}</h2>
        <ul className="list">
          <InfoItem />
        </ul>
      </div>
    </InfoWindow>
  );
};

export default InfoBox;
