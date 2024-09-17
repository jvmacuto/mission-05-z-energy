import React from "react";

const StoreDetails = ({ details }) => {
  return (
    <div className="store-details">
      <h2>{details.name}</h2>
      <p>{details.address}</p>
      <p>Contact: {details.phone}</p>
    </div>
  );
};

export default StoreDetails;
