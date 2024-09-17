import React from "react";
import JourneyPlannerLanding from "./JourneyPlannerLanding";
import SearchInput from "./SearchInput";
import MapComponent from "./MapComponent";

function JourneyPlannerPage() {
  return (
    <div>
      <JourneyPlannerLanding />
      <SearchInput/>
      <MapComponent/>
    </div>
  );
}

export default JourneyPlannerPage;
