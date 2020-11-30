import { FaExclamationCircle } from "react-icons/fa";
import styles from "./Tooltip.module.scss";

const Tooltip = () => {
  return (
    <span
      className={styles.tooltip}
      data-text="Click on any of the turbine icons on the map to show extra information about each turbine!"
      aria-label="Exclamation mark explaining how clicking on any of the turbine icons on the map shows additional information about each turbine"
    >
      <FaExclamationCircle className={styles.icon} />
    </span>
  );
};

export default Tooltip;
