import React from "react";
import CoverageMap from "./CoverageMap";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  //   console.log(serviceCenters);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h1>

      {/* Map */}
      <CoverageMap serviceCenters={serviceCenters} />
    </div>
  );
};

export default Coverage;
