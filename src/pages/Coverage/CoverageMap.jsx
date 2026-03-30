import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CoverageMap = ({ serviceCenters }) => {
  const position = [23.685, 90.3563]; // Bangladesh center

  return (
    <div className="w-full h-125 rounded-xl overflow-hidden">
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>We deliver all over Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CoverageMap;
