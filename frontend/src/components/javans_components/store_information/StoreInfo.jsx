import React from "react";
import StoreDetails from "./StoreDetails";
import FuelPrices from "./FuelPrices";
import Map from "./Map";
import GetDirections from "./GetDirections";
import Services from "./Services";
import PaymentOptions from "./PaymentOptions";
import "./StoreInfo.css"; // Import CSS

const StoreInfo = ({ store }) => {
  // Fallback data in case store props are not provided
  const fallbackStore = {
    details: {
      address: "49 Some Street, New Zealand",
      contact: "09-0000000",
    },
    fuelPrices: {
      premium: 2.895,
      unleaded: 2.746,
      diesel: 2.346,
    },
    location: { lat: -36.8485, lng: 174.7633 }, // Sample coordinates
    services: ["Car Wash", "Bathrooms", "Z Express Coffee"],
    paymentMethods: ["Pay in app", "Pay at pump"],
  };

  const storeData = store || fallbackStore;

  return (
    <div className="store-info">
      <StoreDetails details={storeData.details} />
      <FuelPrices prices={storeData.fuelPrices} />
      <GetDirections address={storeData.details.address} />
      <Map location={storeData.location} />
      <Services services={storeData.services} />
      <PaymentOptions paymentMethods={storeData.paymentMethods} />
    </div>
  );
};

export default StoreInfo;
