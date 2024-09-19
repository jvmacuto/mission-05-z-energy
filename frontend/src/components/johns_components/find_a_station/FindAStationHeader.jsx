import React from "react";
import "./FindAStationHeader.css"; // Assuming you have a CSS file for styling

function FindAStationHeader() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="buttons-container">
          <button className="banner-button1">Find A Station</button>
          <button className="banner-button2">Journey Planner</button>
        </div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <p
          className="location-paragraph"
          onClick={() => alert("Using your location...")}
        >
          Use My Location
        </p>
      </div>
    </div>
  );
}

export default FindAStationHeader;
