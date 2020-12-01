import { useEffect } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { useMapContext } from "../context/mapContext";
import { convertState, getRandomNumber } from "../utils";
import styles from "./InfoItems.module.scss";

const InfoItem = () => {
  const { selectedMill, isCopied, setIsCopied } = useMapContext();

  useEffect(() => {
    if (!isCopied) return;
    const timer = setTimeout(() => setIsCopied(false), 2500);
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
    height = getRandomNumber(68, 138);
  }

  if (!diameter) {
    diameter = getRandomNumber(60, 100);
  }

  if (!capacity) {
    capacity = getRandomNumber(100, 960);
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
      <li className={styles.listItem}>
        <strong>Location: </strong>
        {county}, {fullStateName}
      </li>
      <li className={styles.listItem}>
        <strong>Year became operational:</strong> {year}
      </li>
      <li className={styles.listItem}>
        <strong>Turbine rotor diameter: </strong>
        {diameter} m
      </li>
      <li className={styles.listItem}>
        <strong>Turbine total height:</strong> {Math.round(height)} m
      </li>
      <li className={styles.listItem}>
        <strong>Turbine rated capacity: </strong>
        {/* Math.round */ capacity} kW
      </li>
      <button
        onClick={() => copyToClipboard(forClipboard)}
        className={styles[`copyBtn${isCopied ? "Success" : ""}`]}
        aria-label="Clickable button to copy exact geographical coordinates to clipboard"
      >
        {!isCopied ? (
          <>
            Copy coordinates to clipboard
            <FaClipboard className={styles.iconClipBoard} />
          </>
        ) : (
          <>
            Successfully copied!
            <FaClipboardCheck className={styles.iconClipBoard} />
          </>
        )}
      </button>
    </>
  );
};

export default InfoItem;
