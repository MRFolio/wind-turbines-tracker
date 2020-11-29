import { useEffect } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { useMapContext } from "../context/mapContext";
import { convertState } from "../utils";

const InfoItem = () => {
  const { selectedMill, isCopied, setIsCopied } = useMapContext();

  useEffect(() => {
    if (!isCopied) return;
    const timer = setTimeout(() => setIsCopied(false), 3000);
    return () => clearTimeout(timer);
  }, [isCopied, setIsCopied]);

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

  const copyToClipboard = async (newClip) => {
    try {
      await navigator.clipboard.writeText(newClip);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const fullStateName = convertState(state);
  const forClipboard = `${lat.toString()}, ${lng.toString()}`;

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
      <button
        onClick={() => copyToClipboard(forClipboard)}
        className={`copyBtn ${isCopied && "success"}`}
        aria-label="Clickable button to copy exact geographical coordinates to clipboard"
      >
        <span>
          {!isCopied ? (
            <>
              Copy exact coordinates to clipboard
              <FaClipboard className="iconClipBoard" />
            </>
          ) : (
            <>
              Successfully copied!
              <FaClipboardCheck className="iconClipBoard" />
            </>
          )}
        </span>
      </button>
    </>
  );
};

export default InfoItem;
