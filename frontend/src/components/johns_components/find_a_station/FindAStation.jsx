import React from "react";
import FindAStationHeader from "./FindAStationHeader";
import FindAStationDropdown from "./FindAStationDropdown";
import FindAStationMap from "./FindAStationMap";

function FindAStation() {
  return (
    <div>
      <FindAStationHeader />
      <FindAStationDropdown />
      <FindAStationMap />
    </div>
  );
}

export default FindAStation;
