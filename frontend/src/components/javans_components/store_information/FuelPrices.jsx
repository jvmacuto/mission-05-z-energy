import React from "react";

const FuelPrices = ({ prices }) => {
  return (
    <div className="fuel-prices-container">
      <ul className="fuel-prices-list">
        <li className="fuel-prices-item">
          <div className="fuel-prices-type">
            <span>Premium</span>
            <span className="fuel-prices-price">${prices.premium} / L</span>
          </div>
        </li>
        <li className="fuel-prices-item">
          <div className="fuel-prices-type">
            <span>Unleaded</span>
            <span className="fuel-prices-price">${prices.unleaded} / L</span>
          </div>
        </li>
        <li className="fuel-prices-item">
          <div className="fuel-prices-type">
            <span>Diesel</span>
            <span className="fuel-prices-price">${prices.diesel} / L</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FuelPrices;