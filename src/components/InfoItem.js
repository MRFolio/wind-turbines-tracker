import { FaClipboard } from "react-icons/fa";
import { useMapContext } from "../context/mapContext";
import { convertState } from "../utils";

const InfoItem = ({ isCopied, setIsCopied }) => {
  const { selectedMill } = useMapContext();
  let {
    county,
    state,
    year,
    capacity,
    diameter,
    height,
    lat,
    lng,
  } = selectedMill;

  if (!height) {
    height = 120;
  }

  if (!diameter) {
    diameter = 90;
  }

  /* useEffect(() => {
    const updateClipboard = (newClip) => {
      navigator.clipboard.writeText(newClip).then(
        () => {
          setIsCopied(!isCopied);
        },
        () => console.log("Copy to clipboard was not successful")
      );
    };
  }, [isCopied]); */

  const fullStateName = convertState(state);
  /* const forClipboard = `${lat.toString()}, ${lng.toString()}`; */

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
        <strong>Turbine rotor diameter: </strong>
        {diameter} m
      </li>
      <li className="listItem">
        <strong>Turbine total height:</strong> {Math.round(height)} m
      </li>
      <li className="listItem">
        <strong>Turbine rated capacity: </strong>
        {Math.round(capacity)} kW
      </li>
      <button /* onClick={updateClipboard(forClipboard)} */ className="copyBtn">
        <span className="tooltiptext" id="myTooltip">
          Copy exact coordinates to clipboard{" "}
          {/* ({lat.toFixed(1)}...,{" "}
          {lng.toFixed(1)}
          ...) */}{" "}
          <FaClipboard className="iconClipBoard" />
        </span>
      </button>
    </>
  );
};

export default InfoItem;
