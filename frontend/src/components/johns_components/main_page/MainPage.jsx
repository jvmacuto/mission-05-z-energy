import React, { useEffect } from "react";
import Carousel from "./Carousel";
import PlanATrip from "./PlanATrip";
import BrowseServices from "./BrowseServices";
import PowerYourHome from "./PowerYourHome";
import ExclusiveRewards from "./ExclusiveRewards";
import AOS from "aos";
import "aos/dist/aos.css";

function MainPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Carousel />
      <div data-aos="fade-up">
        <PlanATrip />
      </div>
      <div data-aos="fade-up">
        <BrowseServices />
      </div>
      <div data-aos="fade-up">
        <PowerYourHome />
      </div>
      <div data-aos="fade-up">
        <ExclusiveRewards />
      </div>
    </div>
  );
}

export default MainPage;
