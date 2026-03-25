import React from "react";
import parcelTracking from "../../../assets/tracking.png";
import safeDelivery from "../../../assets/delivery.png";
import support from "../../../assets/support.png";

const DeliveryProgress = () => {
  return (
    <section className="max-w-7xl lg:max-w-6xl mx-auto my-7 lg:my-14 px-4 lg:px-0">
      {/* ProgressContainer */}
      <div className="space-y-6 py-10 lg:py-20 my-10 lg:my-20 border-t border-b border-dashed border-[#03464D]">
        {/* ProgressCard - 1 */}
        <div className="bg-[#ffffff70] p-8 rounded-3xl flex flex-col lg:flex-row items-center gap-6 lg:space-x-12 hover:shadow-md transition-all duration-300">
          {/* Image */}
          <div className="w-32 md:w-44 mx-auto">
            <img
              src={parcelTracking}
              alt="Progress Image"
              className="w-full text-center"
            />
          </div>

          <div className="w-full lg:w-0 lg:h-32 border-b lg:border-r border-dashed border-[#03464D]"></div>

          {/* Content */}
          <div>
            {/* Title */}
            <h4 className="text-[#03373D] text-xl lg:text-2xl text-center lg:text-left font-extrabold mb-4">
              Live Parcel Tracking
            </h4>
            {/* Description */}
            <p className="text-[#606060] text-center lg:text-left font-medium md:w-9/12 mx-auto lg:w-full">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>

        {/* ProgressCard - 2 */}
        <div className="bg-[#ffffff70] p-8 rounded-3xl flex flex-col lg:flex-row items-center gap-6 lg:space-x-12 hover:shadow-md transition-all duration-300">
          {/* Image */}
          <div className="w-32 md:w-44 mx-auto">
            <img
              src={safeDelivery}
              alt="Progress Image"
              className="w-full text-center"
            />
          </div>

          <div className="w-full lg:w-0 lg:h-32 border-b lg:border-r border-dashed border-[#03464D]"></div>

          {/* Content */}
          <div>
            {/* Title */}
            <h4 className="text-[#03373D] text-xl lg:text-2xl text-center lg:text-left font-extrabold mb-4">
              100% Safe Delivery
            </h4>
            {/* Description */}
            <p className="text-[#606060] text-center lg:text-left font-medium md:w-9/12 mx-auto lg:w-full">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>

        {/* ProgressCard - 3 */}
        <div className="bg-[#ffffff70] p-8 rounded-3xl flex flex-col lg:flex-row items-center gap-6 lg:space-x-12 hover:shadow-md transition-all duration-300">
          {/* Image */}
          <div className="w-32 md:w-44 mx-auto">
            <img
              src={support}
              alt="Progress Image"
              className="w-full text-center"
            />
          </div>

          <div className="w-full lg:w-0 lg:h-32 border-b lg:border-r border-dashed border-[#03464D]"></div>

          {/* Content */}
          <div>
            {/* Title */}
            <h4 className="text-[#03373D] text-xl lg:text-2xl text-center lg:text-left font-extrabold mb-4">
              24/7 Call Center Support
            </h4>
            {/* Description */}
            <p className="text-[#606060] text-center lg:text-left font-medium md:w-9/12 mx-auto lg:w-full">
              Our dedicated support team is available around the clock to assist
              you with any questions, provide real-time updates and resolve any
              delivery concerns quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryProgress;
