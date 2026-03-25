import React from "react";
import merchantBg from "../../../assets/merchant-bg.png";
import merchantImage from "../../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <section
      className="max-w-6xl mx-auto my-7 lg:my-14 px-4 lg:px-0 bg-[#03373D] bg-cover bg-top bg-no-repeat rounded-4xl relative overflow-hidden"
      style={{ backgroundImage: `url(${merchantBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#03373D75]"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 p-5 md:p-10 relative z-10">
        {/* Content */}
        <div className="text-center lg:text-start">
          {/* Title */}
          <h2 className="text-base-100 text-lg lg:text-[40px] font-extrabold">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          {/* Description */}
          <p className="text-[#DADADA] text-xs md:text-base mt-4 mb-8">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Cholo courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:justify-center lg:justify-start items-center gap-4">
            <button className="btn px-4 lg:px-8 py-2 lg:py-4 rounded-xl bg-[#CAEB66] hover:bg-transparent shadow-none font-semibold border-2 border-[#CAEB66] hover:border-[#CAEB66] text-[#03373D] hover:text-[#CAEB66] hover:outline-none transition-all duration-300">
              Become a Merchant
            </button>
            <button className="btn px-4 lg:px-8 py-2 lg:py-4 rounded-xl hover:bg-[#CAEB66] bg-transparent shadow-none font-semibold border-2 border-[#CAEB66] text-[#CAEB66] hover:text-[#03373D] hover:outline-none transition-all duration-300">
              Earn with ProFast Courier
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="">
          <img src={merchantImage} alt="Merchant Image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Merchant;
