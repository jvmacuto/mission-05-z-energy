import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChargingStation,
  faFireFlameSimple,
} from "@fortawesome/free-solid-svg-icons";
import "./PowerYourHome.css";

function PowerYourHome() {
  return (
    <div className="power-your-home-container">
      <div className="text-container">
        <h2 className="power-your-name-h2">Power Your Home</h2>
        <p className="power-your-name-p">
          Specialised home power plans to help keep your home and vehicle
          running, tailored for both EV and non-EV drivers.
        </p>
        <button className="power-your-name-btn">Learn More</button>
      </div>
      <div className="icons-container">
        <FontAwesomeIcon icon={faChargingStation} className="fa-icon" />
        <FontAwesomeIcon icon={faFireFlameSimple} className="fa-icon" />
      </div>
    </div>
  );
}

export default PowerYourHome;
