import React from "react";
import Banner from "../Banner/Banner";
import WorkProgress from "../WorkProgress/WorkProgress";
import Services from "../Services/Services";
import Clients from "../Clients/Clients";

const Home = () => {
  return (
    <>
      {/* BannerSection */}
      <Banner />

      {/* WorkProgressSection */}
      <WorkProgress />

      {/* ServiceSection */}
      <Services />

      {/* ClientSection */}
      <Clients />
    </>
  );
};

export default Home;
