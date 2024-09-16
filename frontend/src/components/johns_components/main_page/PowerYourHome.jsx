import React from "react";
import "./PowerYourHome.css";

function PowerYourHome() {
  return (
    <div className="power-your-home-container">
      <div className="text-container">
        <h2>Power Your Home</h2>
        <p>
          Specialised home power plans to help keep your home and vehicle
          running, tailored for both EV and non-EV drivers.
        </p>
        <button>Learn More</button>
      </div>
      <div className="icons-container">
        <i className="icon icon-1">🔋</i>
        <i className="icon icon-2">🚗</i>
      </div>
    </div>
  );
}

export default PowerYourHome;
