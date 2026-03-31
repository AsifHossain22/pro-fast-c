import React, { useState } from "react";
import CoverageMap from "./CoverageMap";
import SearchBox from "./SearchBox";

const Coverage = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h1>

      {/* SearchBox */}
      <SearchBox onSelect={setSelectedCenter} />

      {/* Map */}
      <CoverageMap selectedCenter={selectedCenter} />
    </div>
  );
};

export default Coverage;
