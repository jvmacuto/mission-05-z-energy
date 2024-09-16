import React from "react";
import Carousel from "./Carousel";
import PLanATrip from "./PlanATrip";
import BrowseServices from "./BrowseServices";
import PowerYourHome from "./PowerYourHome";
import ExclusiveRewards from "./ExclusiveRewards";

function MainPage() {
  return (
    <div>
      <Carousel />
      <PLanATrip />
      <BrowseServices />
      <PowerYourHome />
      <ExclusiveRewards />
    </div>
  );
}

export default MainPage;
