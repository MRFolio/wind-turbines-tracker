import { createContext, useContext, useEffect, useState } from "react";

const url = "https://eersc.usgs.gov/api/uswtdb/v1/turbines?&t_state=eq.AK";

const MapContext = createContext(null);
const { Provider } = MapContext;

const MapProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [mapData, setMapData] = useState([]);
  const [selectedMill, setSelectedMill] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [headingOpen, setHeadingOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          const windmills = data.map(
            ({
              case_id: id,
              p_name: name,
              t_state: state,
              t_county: county,
              p_year: year,
              t_cap: capacity,
              t_rd: diameter,
              t_ttlh: height,
              xlong: lng,
              ylat: lat,
            }) => {
              return {
                id,
                name,
                state,
                county,
                year,
                capacity,
                diameter,
                height,
                lng,
                lat,
              };
            }
          );
          setMapData(windmills);
        } else {
          setMapData([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCloseClick = () => setIsCopied(false);
  const handleHeadingToggle = () => setHeadingOpen(!headingOpen);
  const handleHeadingClose = () => setHeadingOpen(false);

  return (
    <Provider
      value={{
        loading,
        mapData,
        selectedMill,
        isCopied,
        headingOpen,
        setIsCopied,
        setSelectedMill,
        setHeadingOpen,
        handleCloseClick,
        handleHeadingClose,
        handleHeadingToggle,
      }}
    >
      {children}
    </Provider>
  );
};
//custom hook
const useMapContext = () => useContext(MapContext);

export { useMapContext, MapProvider };
