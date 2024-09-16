import React from "react";
import "./BrowseServices.css";

function BrowseServices() {
  return (
    <div className="browse-services-container">
      <h2 className="browse-services-header">Browse our Services</h2>
      <p className="browse-services-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        tempora magni facilis assumenda voluptates!
      </p>
      <div className="service-cards-container">
        <div className="service-card">
          <h3 className="service-card-title">Service 1</h3>
          <p className="service-card-description">Description of Service 1.</p>
          <button className="service-card-button">Learn More</button>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">Service 2</h3>
          <p className="service-card-description">Description of Service 2.</p>
          <button className="service-card-button">Learn More</button>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">Service 3</h3>
          <p className="service-card-description">Description of Service 3.</p>
          <button className="service-card-button">Learn More</button>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">Service 4</h3>
          <p className="service-card-description">Description of Service 4.</p>
          <button className="service-card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default BrowseServices;
