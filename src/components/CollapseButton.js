import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMapContext } from "../context/mapContext";
import styles from "./CollapseButton.module.scss";

const CollapseButton = () => {
  const { headingOpen, handleHeadingToggle } = useMapContext();

  return (
    <button
      className={styles["close-btn"]}
      title={headingOpen ? "Minimize heading" : "Show header"}
      aria-label="Button to toggle map header"
      onClick={handleHeadingToggle}
    >
      <span className={styles["info-text"]}>
        {headingOpen ? "Hide header" : "Show header"}
      </span>
      {headingOpen ? <FaEyeSlash /> : <FaEye />}
    </button>
  );
};

export default CollapseButton;
