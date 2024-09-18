import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common_components/Header";
import Footer from "./components/common_components/Footer";
import MainPage from "./components/johns_components/main_page/MainPage";
import FindAStation from "./components/johns_components/find_a_station/FindAStation";
import JourneyPlannerPage from "./components/johns_components/journey_planner/JourneyPlannerPage";
import SimpleMarker from "./components/common_components/SimpleMarker";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/find-station" element={<FindAStation />} />
            <Route path="/journey-planner" element={<JourneyPlannerPage />} />
            <Route path="/simple-marker" element={<SimpleMarker />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
