import React from "react";
import Banner from "../Banner/Banner";
import WorkProgress from "../WorkProgress/WorkProgress";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      {/* BannerSection */}
      <Banner />

      {/* WorkProgressSection */}
      <WorkProgress />

      {/* ServiceSection */}
      <Services />
    </>
  );
};

export default Home;
