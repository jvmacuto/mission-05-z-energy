//this jsx will call on the store information component
import React from "react";
import StoreDetails from "./StoreDetails";
import FuelPrices from "./FuelPrices";
import StationHours from "./StationHours";
import Map from "./Map";
import Services from "./Services";
import PaymentOptions from "./PaymentOptions";
import "../store_information/StoreInfo.css";

function StoreInformation() {
  const storeData = {
    details: {
      name: "Z Station",
      address: "49 Some Street, New Zealand",
      contact: "09-0000000",
    },
    fuelPrices: {
      premium: 2.895,
      unleaded: 2.746,
      diesel: 2.346,
    },
    stationHours: [
      { day: "Monday", hours: "Open 24 hours" },
      { day: "Tuesday", hours: "Open 24 hours" },
      { day: "Wednesday", hours: "Open 24 hours" },
      { day: "Thursday", hours: "Open 24 hours" },
      { day: "Friday", hours: "Open 24 hours" },
      { day: "Saturday", hours: "Open 24 hours" },
      { day: "Sunday", hours: "Open 24 hours" },
    ],
    location: { lat: -36.8485, lng: 174.7633 }, // Sample coordinates
    services: ["Car Wash", "Bathrooms", "Z Express Coffee"], // Add services as part of store data
  };
  return (
    <div>
      <div className="store-info">
        {/* Left Column */}
        <div className="left-column">
          <StoreDetails details={storeData.details} />
          <FuelPrices prices={storeData.fuelPrices} />
          <StationHours hours={storeData.stationHours} />
        </div>

        {/* Right Column: Map */}
        <Map location={storeData.location} />

        {/* Services Section */}
        <div className="services-section">
          <Services services={storeData.services} />
        </div>

        {/* Payment Options Section */}
        <div className="payment-options-section">
          <PaymentOptions />
        </div>
      </div>
    </div>
  );
}

export default StoreInformation;
