import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

import "./PlanATrip.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "leaflet/dist/leaflet.css";

function PlanATrip() {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get("/api/getCoordinates");
        setCoordinates(response.data);
      } catch (err) {
        console.log("Error fetching coordinates: ", err);
      }
    };
    fetchCoordinates();
  });
  return (
    <div className="plan-a-trip-container">
      <div className="text-container">
        <h1 className="plan-a-trip-heading1">Looking to get fuelled up?</h1>
        <p>
          Plan your trips using our Journey Planner and see the nearest stations
          along the way!
        </p>
        <div className="button-container">
          <button className="find-a-station">Find a Station</button>
          <Link to="/journey-planner">
            <button className="plan-your-journey">Plan your Journey</button>
          </Link>
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
            {/*{coordinates.map((coordinate) => (
              <Marker
                key={coordinate._id}
                position={[coordinate.latitude, coordinate.longitude]}
              >
                <Popup>{coordinate.description}</Popup>
              </Marker>
            ))}*/}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default PlanATrip;
