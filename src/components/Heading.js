import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { useMapContext } from "../context/mapContext";
import CollapseButton from "./CollapseButton";

const sumReducer = (sum, value) => sum + value;

const reducer = (windFarms) =>
  windFarms
    .map((windmill) => windmill.capacityTurbine)
    .reduce(sumReducer, 0)
    .toFixed();

const averageAge = (windFarms) => {
  const windmillAges = parseInt(
    windFarms.map((windmill) => windmill.year).reduce(sumReducer, 0) /
      windFarms.length,
    10
  );
  const currentDate = new Date().getFullYear();
  const averageAge = currentDate - windmillAges;
  return averageAge;
};

const Heading = () => {
  const [headingOpen, setHeadingOpen] = useState(true);
  const { mapData } = useMapContext();

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
            <li>
              <strong>Total number: </strong> {mapData.length}
            </li>
            <li>
              <strong>Average age: </strong>
              {averageAge(mapData)} years
            </li>
            <li>
              <strong>Sum capacity: </strong>
              {reducer(mapData) / 1000} MW
            </li>
          </ul>
          <p className="click-instructions">
            Click on the
            <img
              src="/windmill.svg"
              alt="Windmill icon"
              title="Windmill icon shown on the map"
              aria-label="This is a windmill icon shown on the map"
            />
            icon for detailed information
            <span>
              <FaExclamationCircle className="icon" />
            </span>
          </p>
        </header>
      )}
    </>
  );
};
export default Heading;
