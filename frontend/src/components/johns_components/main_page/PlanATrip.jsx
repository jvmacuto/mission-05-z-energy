import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./PlanATrip.css";

// Import marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const gasStations = [
  { id: 1, name: "Z Station 1", position: [-36.8485, 174.7633] }, // Example coordinates for Auckland
  { id: 2, name: "Z Station 2", position: [-41.2865, 174.7762] }, // Example coordinates for Wellington
  { id: 3, name: "Z Station 3", position: [-43.5321, 172.6362] }, // Example coordinates for Christchurch
];

function PlanATrip() {
  return (
    <div className="plan-a-trip-container">
      <div className="text-container">
        <h1>Looking to get fuelled up?</h1>
        <p>
          Plan your trips using our Journey Planner and see the nearest stations
          along the way!
        </p>
        <div className="button-container">
          <button className="btn btn-primary">Start Planning</button>
          <button className="btn btn-secondary">Find Nearest Station</button>
        </div>
      </div>
      <div className="map-container">
        <div className="map-wrapper">
          <MapContainer
            center={[-40.9006, 174.886] /* Center of New Zealand */}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {gasStations.map((station) => (
              <Marker key={station.id} position={station.position}>
                <Popup>{station.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default PlanATrip;
