import { useEffect, useState } from "react";
import { useMapContext } from "../context/mapContext";
import windMillIcon from "../images/windmill.svg";
import CollapseButton from "./CollapseButton";
import styles from "./Heading.module.scss";
import HeadingItems from "./HeadingItems";
import Tooltip from "./Tooltip";

const Heading = () => {
  const { headingOpen } = useMapContext();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return { width };
  }

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return (
    <>
      {!headingOpen ? (
        <CollapseButton />
      ) : (
        <header className={styles["heading"]}>
          <CollapseButton />
          <h2 className={styles.title}>
            {windowDimensions.width < 400 && "\n"}
            Wind turbines in Alaska
          </h2>
          <ul className={styles["info-container"]}>
            <HeadingItems />
          </ul>
          <p className={styles["click-instructions"]}>
            Click on the
            <img
              src={windMillIcon}
              alt="Wind turbine icon"
              title="The green windmill icon shown on the map for each turbine"
              aria-label="This is a windmill icon shown on the map"
              className={styles["turbine-img"]}
            />
            icon for details
            {windowDimensions.width > 599 && <Tooltip />}
          </p>
        </header>
      )}
    </>
  );
};
export default Heading;
