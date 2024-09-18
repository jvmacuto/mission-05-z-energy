import React from "react";

// Station hours component
const StationHours = ({ hours }) => {
  return (
    <div className="station-hours">
      <h3>Station Hours:</h3>
      <ul>
        {hours.map((hour, index) => (
          <li key={index} className="day-hours">
            <span>{hour.day}</span>
            <span>{hour.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationHours;
