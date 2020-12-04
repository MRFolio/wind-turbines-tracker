import { InfoWindow } from "@react-google-maps/api";
import { useMapContext } from "../context/mapContext";
import styles from "./InfoBox.module.scss";
import InfoItems from "./InfoItems";

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
      <div>
        <h2 className={styles.boxTitle}>{name}</h2>
        <ul className={styles.list}>
          <InfoItems />
        </ul>
      </div>
    </InfoWindow>
  );
};

export default InfoBox;
