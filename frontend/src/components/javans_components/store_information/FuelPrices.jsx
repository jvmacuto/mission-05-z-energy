import React from "react";

const FuelPrices = ({ prices }) => {
  return (
    <div className="fuel-prices">
      <ul>
        <li>
          <div className="fuel-type">
            <span>Premium</span>
            <span className="price">${prices.premium} / L</span>
          </div>
        </li>
        <li>
          <div className="fuel-type">
            <span>Unleaded</span>
            <span className="price">${prices.unleaded} / L</span>
          </div>
        </li>
        <li>
          <div className="fuel-type">
            <span>Diesel</span>
            <span className="price">${prices.diesel} / L</span>
          </div>
        </li>
      </ul>

      {/* New section under the fuel prices */}
      <div className="fuel-extra">
        <h3>Payment</h3>
        <div className="fuel-payment-methods">
          <span>Pay in app</span>
          <span>Pay at pump</span>
        </div>
      </div>
    </div>
  );
};

export default FuelPrices;
