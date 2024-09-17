import React from "react";

const FuelPrices = ({ prices }) => {
  return (
    <div className="fuel-prices">
      <h3>Fuel Prices</h3>
      <ul>
        <li>Premium: ${prices.premium} / L</li>
        <li>Unleaded: ${prices.unleaded} / L</li>
        <li>Diesel: ${prices.diesel} / L</li>
      </ul>
    </div>
  );
};

export default FuelPrices;
