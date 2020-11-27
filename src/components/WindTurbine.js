import { Marker } from "@react-google-maps/api";

const iconOptions = {
  url: "/windmill.svg",
};

const WindTurbine = ({ lat, lng, onClick }) => (
  <Marker position={{ lat, lng }} icon={iconOptions} onClick={onClick} />
);

export default WindTurbine;
