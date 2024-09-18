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
      <button className="btn product-and-services">Product & Services</button>
      <div className="service-cards-container">
        <div className="service-card">
          <img
            src="path/to/image1.jpg"
            alt="Service 1"
            className="service-card-image"
          />
          <h3 className="service-card-title">Service 1</h3>
          <p className="service-card-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            alias suscipit, ratione debitis a repellat.
          </p>
          <button className="service-card-button">Learn More</button>
        </div>
        <div className="service-card">
          <img
            src="path/to/image2.jpg"
            alt="Service 2"
            className="service-card-image"
          />
          <h3 className="service-card-title">Service 2</h3>
          <p className="service-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            beatae aspernatur non optio autem laboriosam!.
          </p>
          <button className="service-card-button">Learn More</button>
        </div>

        <div className="service-card">
          <img
            src="path/to/image3.jpg"
            alt="Service 3"
            className="service-card-image"
          />
          <h3 className="service-card-title">Service 3</h3>
          <p className="service-card-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
            veritatis libero quasi qui hic assumenda.
          </p>
          <button className="service-card-button">Learn More</button>
        </div>

        <div className="service-card">
          <img
            src="path/to/image4.jpg"
            alt="Service 4"
            className="service-card-image"
          />
          <h3 className="service-card-title">Service 4</h3>
          <p className="service-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            temporibus dolores magni obcaecati iure ducimus?
          </p>
          <button className="service-card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default BrowseServices;
