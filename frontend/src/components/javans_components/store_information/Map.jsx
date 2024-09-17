import React from "react";

const Map = ({ location }) => {
  return (
    <div className="map">
      <h3>Location</h3>
      <iframe
        src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
        width="600"
        height="450"
        allowFullScreen
        title="Map"
      ></iframe>
    </div>
  );
};

export default Map;
