import { useMap } from "react-leaflet";

const FlyToDistrict = ({ position }) => {
  const map = useMap();

  if (position) {
    map.flyTo(position, 10, {
      duration: 1.5,
    });
  }

  return null;
};

export default FlyToDistrict;
