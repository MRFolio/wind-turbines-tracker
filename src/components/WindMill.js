import { Marker } from "@react-google-maps/api";

const WindMill = ({ lat, lng, onClick }) => {
  const iconOptions = {
    url: "/windmill.svg",
  };

  return (
    <Marker position={{ lat, lng }} icon={iconOptions} onClick={onClick} />
  );
};

export default WindMill;
