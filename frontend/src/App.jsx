import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/javans_components/store_information/Header";
import Footer from "./components/javans_components/store_information/Footer";
import StoreInfo from "./components/javans_components/store_information/StoreInfo";
import FuelPrices from "./components/javans_components/store_information/FuelPrices";
import Map from "./components/javans_components/store_information/Map";
import Services from "./components/javans_components/store_information/Services";
import PaymentOptions from "./components/javans_components/store_information/PaymentOptions";
import StoreDetails from "./components/javans_components/store_information/StoreDetails";
import GetDirections from "./components/javans_components/store_information/GetDirections";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Store Information Route */}
          <Route
            path="/store-information"
            element={
              <StoreInfo>
                <StoreDetails />
                <FuelPrices />
                <GetDirections />
                <Map />
                <Services />
                <PaymentOptions />
              </StoreInfo>
            }
          />
          {/* Fallback Route to handle unmatched routes */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer /> {/* Footer is directly rendered now */}
    </Router>
  );
}

export default App;
