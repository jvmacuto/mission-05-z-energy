import React from "react";
import "./StationHours.css";

// Station hours component
const StationHours = ({ hours }) => {
  return (
    <div className="station-hours-container">
      <h3 className="station-hours-title">Station Hours:</h3>
      <ul className="station-hours-list">
        {hours.map((hour, index) => (
          <li key={index} className="station-hours-item">
            <span className="station-hours-day">{hour.day}</span>
            <span className="station-hours-time">{hour.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationHours;
