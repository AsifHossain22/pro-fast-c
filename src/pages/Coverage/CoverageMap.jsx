import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import FlyToDistrict from "./FlyToDistrict";
import serviceCenter from "../../../public/serviceCenter.json";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// DefaultMarker
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
});

// HighlightedMarker
const selectedIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [35, 55],
});

const CoverageMap = ({ selectedCenter }) => {
  const position = [23.685, 90.3563]; // CenterOfBangladesh

  const selectedPosition = selectedCenter
    ? [selectedCenter.latitude, selectedCenter.longitude]
    : null;

  return (
    <div className="w-full h-125 rounded-xl overflow-hidden relative z-0">
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* MoveMap */}
        <FlyToDistrict position={selectedPosition} />

        {/* AllMarkersAndHighlightedMarkers */}
        {serviceCenter.map((centerData, index) => {
          const isSelected =
            selectedCenter && selectedCenter.district === centerData.district;

          return (
            <Marker
              key={index}
              position={[centerData.latitude, centerData.longitude]}
              icon={isSelected ? selectedIcon : defaultIcon}
            >
              <Popup>
                <div>
                  <h2 className="font-bold text-lg">{centerData.district}</h2>
                  <p>{centerData.region}</p>

                  {isSelected && (
                    <p className="text-green-600 font-semibold">Selected 📍</p>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CoverageMap;
