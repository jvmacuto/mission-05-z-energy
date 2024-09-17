import React from "react";

const Services = ({ services }) => {
  return (
    <div className="services">
      <h3>Services</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
