import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import { Link } from "react-router-dom";

import "./PlanATrip.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -40.9006, // Center of New Zealand
  lng: 174.886,
};

function PlanATrip() {
  const [gasStations, setGasStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  const getGasStations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/get-stations"
      );
      setGasStations(response.data);
    } catch (error) {
      console.error("Error fetching gas stations:", error);
    }
  };

  useEffect(() => {
    const fetchGasStations = async () => {
      await getGasStations();
    };

    fetchGasStations();
  }, []);

  return (
    <div className="plan-a-trip-container">
      <div className="text-container">
        <h1 className="plan-a-trip-heading1">Looking to get fuelled up?</h1>
        <p>
          Plan your trips using our Journey Planner and see the nearest stations
          along the way!
        </p>
        <div className="button-container">
          <button className="btn find-a-station">Find a Station</button>
          <Link to="/journey-planner">
            <button className="btn plan-your-journey">Plan your Journey</button>
          </Link>
        </div>
      </div>
      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyBtdzx5ELApWo1_3H678plhHeCTDE7aBys">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
          >
            {gasStations.map((station) => (
              <Marker
                key={station.place_id}
                position={{
                  lat: station.geometry.location.lat,
                  lng: station.geometry.location.lng,
                }}
                title={station.name}
                onClick={() => setSelectedStation(station)}
              />
            ))}
            {selectedStation && (
              <InfoWindow
                position={{
                  lat: selectedStation.geometry.location.lat,
                  lng: selectedStation.geometry.location.lng,
                }}
                onCloseClick={() => setSelectedStation(null)}
              >
                <div>
                  <h2>{selectedStation.name}</h2>
                  <p>{selectedStation.vicinity}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default PlanATrip;
