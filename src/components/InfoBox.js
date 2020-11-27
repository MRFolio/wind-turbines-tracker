import { InfoWindow } from "@react-google-maps/api";
import { useMapContext } from "../context/mapContext";
import InfoItem from "./InfoItem";

const InfoBox = () => {
  const { selectedMill, setSelectedMill } = useMapContext();

  const options = {
    minWidth: 320,
    pixelOffset: {
      width: 3,
      height: -26,
    },
  };

  let { name, lng, lat } = selectedMill;

  let position = {
    lat,
    lng,
  };

  const handleClose = () => setSelectedMill(null);

  return (
    <InfoWindow
      position={position}
      onCloseClick={handleClose}
      options={options}
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
