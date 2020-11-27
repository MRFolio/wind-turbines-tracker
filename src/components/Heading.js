import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import windMillIcon from "../images/windmill.svg";
import CollapseButton from "./CollapseButton";
import HeadingItems from "./HeadingItems";

const Heading = () => {
  const [headingOpen, setHeadingOpen] = useState(true);

  return (
    <>
      {!headingOpen ? (
        <CollapseButton
          headingOpen={headingOpen}
          setHeadingOpen={setHeadingOpen}
        />
      ) : (
        <header className="heading">
          <CollapseButton
            headingOpen={headingOpen}
            setHeadingOpen={setHeadingOpen}
          />
          <h2 className="title">Wind turbines in the U.S.</h2>
          <ul className="info-container">
            <HeadingItems />
          </ul>
          <p className="click-instructions">
            Click on the
            <img
              src={windMillIcon}
              alt="Wind turbine icon"
              title="The windmill icon shown on the map"
              aria-label="This is a windmill icon shown on the map"
              className="turbine-img"
            />
            icon for details
            <span className="icon" aria-label="exclamation mark">
              <FaExclamationCircle className="icon" />
            </span>
          </p>
        </header>
      )}
    </>
  );
};
export default Heading;
