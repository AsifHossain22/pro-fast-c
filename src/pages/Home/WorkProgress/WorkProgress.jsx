import React from "react";
import {
  FaBuilding,
  FaMoneyBillWave,
  FaTruckPickup,
  FaWarehouse,
} from "react-icons/fa";

const WorkProgress = () => {
  return (
    <section className="max-w-7xl lg:max-w-6xl mx-auto my-7 lg:my-14 px-4 lg:px-0">
      <h2 className="text-[#03373D] text-center lg:text-left text-2xl lg:text-3xl font-extrabold mb-4 lg:mb-8">
        How it Works
      </h2>

      {/* WorkProgressContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* WorkProgressCard */}
        <div className="bg-[#ffffff70] border-2 border-transparent hover:border-[#caeb66] p-8 rounded-4xl text-center lg:text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* Icon */}
          <div className="text-4xl text-[#03373D]">
            <FaTruckPickup className="mx-auto lg:mx-0" />
          </div>
          {/* Title */}
          <h4 className="text-[#03373D] text-xl font-bold pt-6 pb-4">
            Booking Pick & Drop
          </h4>
          {/* Description */}
          <p className="text-[#606060] font-medium">
            Schedule pickups and doorstep deliveries with ease — fast, reliable
            and tailored to your convenience.
          </p>
        </div>

        {/* WorkProgressCard */}
        <div className="bg-[#ffffff70] border-2 border-transparent hover:border-[#caeb66] p-8 rounded-4xl text-center lg:text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* Icon */}
          <div className="text-4xl text-[#03373D]">
            <FaMoneyBillWave className="mx-auto lg:mx-0" />
          </div>
          {/* Title */}
          <h4 className="text-[#03373D] text-xl font-bold pt-6 pb-4">
            Cash On Delivery
          </h4>
          {/* Description */}
          <p className="text-[#606060] font-medium">
            Offer flexible payment options with secure cash collection at
            delivery, ensuring trust for both you and your customers.
          </p>
        </div>

        {/* WorkProgressCard */}
        <div className="bg-[#ffffff70] border-2 border-transparent hover:border-[#caeb66] p-8 rounded-4xl text-center lg:text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* Icon */}
          <div className="text-4xl text-[#03373D]">
            <FaWarehouse className="mx-auto lg:mx-0" />
          </div>
          {/* Title */}
          <h4 className="text-[#03373D] text-xl font-bold pt-6 pb-4">
            Delivery Hub
          </h4>
          {/* Description */}
          <p className="text-[#606060] font-medium">
            Centralized logistics hubs designed to streamline sorting, storage
            and dispatch for faster and more efficient deliveries.
          </p>
        </div>

        {/* WorkProgressCard */}
        <div className="bg-[#ffffff70] border-2 border-transparent hover:border-[#caeb66] p-8 rounded-4xl text-center lg:text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* Icon */}
          <div className="text-4xl text-[#03373D]">
            <FaBuilding className="mx-auto lg:mx-0" />
          </div>
          {/* Title */}
          <h4 className="text-[#03373D] text-xl font-bold pt-6 pb-4">
            Booking SME & Corporate
          </h4>
          {/* Description */}
          <p className="text-[#606060] font-medium">
            Scalable delivery solutions built for businesses — from small
            enterprises to large corporations with high-volume needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkProgress;
