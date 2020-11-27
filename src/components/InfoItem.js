import { useMapContext } from "../context/mapContext";
import convertState from "../utils/convertState";

const InfoItem = () => {
  const { selectedMill } = useMapContext();
  let {
    county,
    state,
    year,
    capacityCumulative,
    capacityTurbine,
    height,
  } = selectedMill;

  if (!height) {
    height = 50;
  }

  const fullStateName = convertState(state);

  return (
    <>
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
    </>
  );
};

export default InfoItem;
