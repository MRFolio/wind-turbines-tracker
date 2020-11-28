import { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import windMillIcon from "../images/windmill.svg";
import CollapseButton from "./CollapseButton";
import HeadingItems from "./HeadingItems";

const Heading = () => {
  const [headingOpen, setHeadingOpen] = useState(true);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return { width };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

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
          <h2 className="title">
            {windowDimensions.width < 405 && "\n"}
            Wind turbines in the U.S.
          </h2>
          <ul className="info-container">
            <HeadingItems />
          </ul>
          <p className="click-instructions">
            Click on the
            <img
              src={windMillIcon}
              alt="Wind turbine icon"
              title="The green windmill icon shown on the map for each turbine"
              aria-label="This is a windmill icon shown on the map"
              className="turbine-img"
            />
            icon for details
            {/*  <span
              className="icon"
              aria-label="Exclamation mark explaining how clicking on any of the turbine icons on the map shows additional information about each turbine"
              title="Click on any of the turbine icons on the map to show additional information about each turbine"
              data-title="Click on any of the turbine icons on the map to show additional information about each turbine"
            ></span> */}
            <span
              className="tooltip"
              data-text="Click on any of the turbine icons on the map to show extra information about each turbine!"
              aria-label="Exclamation mark explaining how clicking on any of the turbine icons on the map shows additional information about each turbine"
            >
              <FaExclamationCircle className="icon" />
            </span>
          </p>
        </header>
      )}
    </>
  );
};
export default Heading;
