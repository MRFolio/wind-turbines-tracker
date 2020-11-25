import { useMapContext } from "../context/mapContext";
import { InfoWindow } from "@react-google-maps/api";

const InfoBox = () => {
  const { selectedMill, setSelectedMill } = useMapContext();

  const handleClose = () => setSelectedMill(null);
  const position = {
    lat: selectedMill.lat,
    lng: selectedMill.lng,
  };

  return (
    <InfoWindow position={position} onCloseClick={handleClose}>
      <div>
        <h2>{selectedMill.name}</h2>
        <p>{selectedMill.status}</p>
        <p>
          {selectedMill.county}, {selectedMill.state}
        </p>
        <p>{selectedMill.year}</p>
        <p>{selectedMill.capacity} MW</p>
        <p>{selectedMill.height} meters</p>
      </div>
    </InfoWindow>
  );
};

export default InfoBox;
