import React from "react";
import "./Services.css"; // Assuming you will handle the styles in this CSS file

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-header">
        <h3>Services</h3>
        <button className="services-button">
          Find out more
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="services-categories">
        <div className="services-category">
          <h4>Payment</h4>
          <ul>
            <li>
              <a href="#">Pay in app</a>
            </li>
            <li>
              <a href="#">Pay at pump</a>
            </li>
          </ul>
        </div>
        <div className="services-category">
          <h4>Food & Drink</h4>
          <ul>
            <li>
              <a href="#">Z Espresso Coffee & Fresh Food</a>
            </li>
            <li>
              <a href="#">Pre-order Coffee</a>
            </li>
          </ul>
        </div>
        <div className="services-category">
          <h4>Other</h4>
          <ul>
            <li>
              <a href="#">Super long hoses</a>
            </li>
            <li>
              <a href="#">Bathrooms</a>
            </li>
            <li>
              <a href="#">LPG SWAP'n'GO</a>
            </li>
            <li>
              <a href="#">A-Z Screen</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
