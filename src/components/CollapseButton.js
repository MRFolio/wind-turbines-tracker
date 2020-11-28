import { FaEye, FaEyeSlash } from "react-icons/fa";

const CollapseButton = ({ headingOpen, setHeadingOpen }) => {
  return (
    <button
      className="close-btn"
      title={headingOpen ? "Minimize heading" : "Show header"}
      aria-label="Button to toggle map header"
      onClick={() => setHeadingOpen(!headingOpen)}
    >
      <span className="info-text">
        {headingOpen ? "Hide header" : "Show header"}
      </span>
      {headingOpen ? <FaEyeSlash /> : <FaEye />}
    </button>
  );
};

export default CollapseButton;
