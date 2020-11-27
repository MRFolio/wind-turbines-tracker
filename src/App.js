import Map from "./components/Map";
import Spinner from "./components/Spinner";
import { useMapContext } from "./context/mapContext";

function App() {
  const { loading } = useMapContext();

  return (
    <>
      <Map />
      {loading && <Spinner />}
    </>
  );
}

export default App;
