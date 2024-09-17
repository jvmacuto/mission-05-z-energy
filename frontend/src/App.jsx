import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common_components/Header";
import Footer from "./components/common_components/Footer";
import StoreInfo from "./components/javans_components/store_information/StoreInfo";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/store-information" element={<StoreInfo />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
