import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { serviceOptions } from "./FindAStationDropdown";
import { getRandomizedOptions } from "../../../utils/utils";
import "./FindAStationMap.css";

const mapContainerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: -40.9006, // Latitude for New Zealand
  lng: 174.886, // Longitude for New Zealand
};

const FindAStationMap = () => {
  const [gasStations, setGasStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    const fetchGasStations = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get-stations");
        const data = await response.json();
        setGasStations(data);
      } catch (error) {
        console.error("Error fetching gas stations:", error);
      }
    };

    fetchGasStations();
  }, []);

  return (
    <div className="find-a-station-text-container">
      <div className="stations-list">
        <ul>
          {gasStations.map((station, index) => (
            <li key={index}>
              <h2>{station.name}</h2>
              <p>{station.address}</p>
              <details>
                <summary>
                  <strong>24 Hours</strong>
                </summary>
                <p>Open 24 hours</p>
                <ul>
                  {[
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ].map((day, idx) => (
                    <li key={idx}>{day}</li>
                  ))}
                </ul>
              </details>
              <details>
                <summary>
                  <strong>Services</strong>
                </summary>
                <div className="tag-container">
                  {getRandomizedOptions(serviceOptions).map((option, idx) => (
                    <span key={idx} className="tag-card">
                      {option}
                    </span>
                  ))}
                </div>
              </details>

              <details>
                <summary>
                  <strong>Fuel Prices</strong>
                </summary>
                <ul className="fuel-prices">
                  <li>ZX Premium: $2.50/L</li>
                  <li>Z91 Unleaded: $2.30/L</li>
                  <li>Z Diesel: $1.90/L</li>
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyBtdzx5ELApWo1_3H678plhHeCTDE7aBys">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
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
                  <p>{selectedStation.address}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default FindAStationMap;
