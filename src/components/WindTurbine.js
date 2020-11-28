import { Marker } from "@react-google-maps/api";

const iconOptions = {
  url: "/windmill.svg",
  scaledSize: { width: 35, height: 35 },
  /* origin: {}, */
  /* anchor: { x: 15, y: 15 }, */
};

const WindTurbine = ({ lat, lng, onClick }) => (
  <Marker
    position={{ lat, lng }}
    icon={iconOptions}
    onClick={onClick}
    animation={2}
    /* onHover={console.log(item)} */
    /* getClickable */
  />
);

export default WindTurbine;
