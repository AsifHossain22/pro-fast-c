import React from "react";
import Banner from "../Banner/Banner";
import WorkProgress from "../WorkProgress/WorkProgress";
import Services from "../Services/Services";
import Clients from "../Clients/Clients";
import DeliveryProgress from "../DeliveryProgress/DeliveryProgress";
import Merchant from "../Merchant/Merchant";
import Testimonials from "../Testimonials/Testimonials";

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

      {/* DeliveryProgressSection */}
      <DeliveryProgress />

      {/* MerchantSection */}
      <Merchant />

      {/* TestimonialSection */}
      <Testimonials />
    </>
  );
};

export default Home;
