import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common_components/Header";
import Footer from "./components/common_components/Footer";
import MainPage from "./components/johns_components/main_page/MainPage";
import FindAStation from "./components/johns_components/find_a_station/FindAStation";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/find-station" element={<FindAStation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
