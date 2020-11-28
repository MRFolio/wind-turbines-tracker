import { useMapContext } from "../context/mapContext";

const sumReducer = (sum, value) => sum + value;
const getYear = (item) => item.year;
const getHeight = (item) => item.height;
const getCapacity = (item) => item.capacity;
const filterItems = (items, parameter) =>
  items.filter((item) => item[parameter]);

/* const filteredMaps = (windFarms) => {
  return windFarms.filter((windfarm) => windfarm.height);
}; */

const addCapacities = (windFarms) =>
  windFarms.map(getCapacity).reduce(sumReducer, 0).toFixed();

const averageAge = (windFarms) => {
  const filteredYearList = filterItems(windFarms, "year");
  const averageYear = parseInt(
    filteredYearList.map(getYear).reduce(sumReducer, 0) /
      filteredYearList.length,
    10
  );
  const currentDate = new Date().getFullYear();
  return currentDate - averageYear;
};
const averageHeight = (windFarms) => {
  const filteredHeightList = filterItems(windFarms, "height");
  return parseInt(
    filteredHeightList.map(getHeight).reduce(sumReducer, 0) /
      filteredHeightList.length,
    10
  );
};

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
        <strong>Total rated capacity: </strong>~
        {Math.round(addCapacities(mapData) / 1000)} MW
      </li>
    </>
  );
};

export default HeadingItems;
