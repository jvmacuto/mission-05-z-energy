import React from "react";

const StoreDetails = ({ details }) => {
  return (
    <div className="store-details">
      <a href="#" className="back-link">
        Back to find a station
      </a>
      <h2 className="store-name">{details.name}</h2>
      <p className="store-address">{details.address}</p>
      <p className="store-contact">
        Contact Us: <a href="tel:000000000">{details.contact}</a>
      </p>
      <button className="get-directions-btn">
        Get directions <span className="directions-icon">→</span>
      </button>
    </div>
  );
};

export default StoreDetails;
