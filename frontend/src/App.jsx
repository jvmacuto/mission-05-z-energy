import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common_components/Header";
import Footer from "./components/common_components/Footer";
import MainPage from "./components/johns_components/main_page/MainPage";
import JourneyPlannerPage from "./components/johns_components/journey_planner/JourneyPlannerPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/journey-planner" element={<JourneyPlannerPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
