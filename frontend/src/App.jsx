import React from "react";
import Header from "./components/javans_components/store_information/Header";
import Footer from "./components/javans_components/store_information/Footer";
import StoreDetails from "./components/javans_components/store_information/StoreDetails";
import FuelPrices from "./components/javans_components/store_information/FuelPrices";
import Map from "./components/javans_components/store_information/Map";
import Services from "./components/javans_components/store_information/Services";
import PaymentOptions from "./components/javans_components/store_information/PaymentOptions";
import GetDirections from "./components/javans_components/store_information/GetDirections";
import StationHours from "./components/javans_components/store_information/StationHours"; // Import station hours component
import "./components/javans_components/store_information/StoreInfo.css"; // Ensure this imports the correct styles

function App() {
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
    <>
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
