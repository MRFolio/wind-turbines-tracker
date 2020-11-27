import { useMapContext } from "../context/mapContext";

const sumReducer = (sum, value) => sum + value;
const getYear = (item) => item.year;
const getHeight = (item) => item.height;
const getCapacity = (item) => item.capacityTurbine;

const addCapacities = (windFarms) =>
  windFarms.map(getCapacity).reduce(sumReducer, 0).toFixed();

const averageAge = (windFarms) => {
  const windmillAges = parseInt(
    windFarms.map(getYear).reduce(sumReducer, 0) / windFarms.length,
    10
  );
  const currentDate = new Date().getFullYear();
  const averageAge = currentDate - windmillAges;
  return averageAge;
};
const averageHeight = (windFarms) =>
  parseInt(
    windFarms.map(getHeight).reduce(sumReducer, 0) / windFarms.length,
    10
  );

const HeadingItems = () => {
  const { mapData } = useMapContext();

  return (
    <>
      <li>
        <strong>Total number: </strong> {mapData.length}
      </li>
      <li>
        <strong>Average age: </strong>
        {averageAge(mapData)} years
      </li>
      <li>
        <strong>Average height: </strong>
        {averageHeight(mapData)} m
      </li>
      <li>
        <strong>Sum capacity: </strong>
        {addCapacities(mapData) / 1000} MW
      </li>
    </>
  );
};

export default HeadingItems;
