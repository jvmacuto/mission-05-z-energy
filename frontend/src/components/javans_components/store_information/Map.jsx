import React from "react";

const Map = ({ location }) => {
  return (
    <div className="map-component-container">
      <iframe
        src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
        width="640"
        height="800"
        allowFullScreen
        title="Map"
        className="map-component-iframe"
      ></iframe>
    </div>
  );
};

export default Map;
