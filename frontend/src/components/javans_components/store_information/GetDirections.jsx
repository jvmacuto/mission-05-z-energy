import React from "react";

const GetDirections = ({ address }) => {
  return (
    <div className="get-directions">
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
          address
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Directions
      </a>
    </div>
  );
};

export default GetDirections;
