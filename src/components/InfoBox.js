import { InfoWindow } from "@react-google-maps/api";
import { useMapContext } from "../context/mapContext";
import convertState from "../utils/convertState";

const InfoBox = () => {
  const { selectedMill, setSelectedMill } = useMapContext();

  const {
    name = "Windshear II",
    state = "CA",
    county = "RiverSide County",
    year = 1995,
    capacityCumulative = 1200,
    capacityTurbine = 20,
    height = 80,
    lng,
    lat,
  } = selectedMill;

  const handleClose = () => setSelectedMill(null);
  const position = {
    lat,
    lng,
  };

  const fullStateName = convertState(state);

  return (
    <InfoWindow position={position} onCloseClick={handleClose}>
      <div className="infoBox">
        <h2 className="boxTitle">{name}</h2>
        <ul className="list">
          <li className="listItem">
            <strong>Location: </strong>
            {county}, {fullStateName}
          </li>
          <li className="listItem">
            <strong>Year became operational:</strong> {year}
          </li>
          <li className="listItem">
            <strong>Wind farm cumulative capacity: </strong>
            {capacityCumulative} MW
          </li>
          <li className="listItem">
            <strong>Turbine capacity: </strong>
            {capacityTurbine} kW
          </li>
          <li className="listItem">
            <strong>Turbine hub height:</strong> {height} meters
          </li>
        </ul>
      </div>
    </InfoWindow>
  );
};

export default InfoBox;
