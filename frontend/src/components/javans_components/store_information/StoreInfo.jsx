import React from "react";
import StoreDetails from "./StoreDetails";
import FuelPrices from "./FuelPrices";
import Map from "./Map";
import GetDirections from "./GetDirections";
import Services from "./Services";
import PaymentOptions from "./PaymentOptions";
import "./StoreInfo.css"; // Import CSS

const StoreInfo = ({ store }) => {
  return (
    <div className="store-info">
      <StoreDetails details={store.details} />
      <FuelPrices prices={store.fuelPrices} />
      <GetDirections address={store.details.address} />
      <Map location={store.location} />
      <Services services={store.services} />
      <PaymentOptions paymentMethods={store.paymentMethods} />
    </div>
  );
};

export default StoreInfo;
