import React from "react";
import { FaBoxes, FaBuilding } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdAttachMoney, MdPublic, MdReplay } from "react-icons/md";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 lg:py-25 my-7 lg:my-14 px-4 lg:px-0 bg-[#03373D] rounded-4xl">
      {/* SectionTitle */}
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-base-100 text-xl md:text-3xl lg:text-[40px] font-extrabold">
          Our Services
        </h2>

        {/* Description */}
        <p className="text-[#DADADA] text-xs md:text-sm lg:text-base font-medium mt-4 mb-8 max-w-7/12 mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* ServicesContainer */}
      <div className="max-w-7xl lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ServiceItem */}
        <div className="bg-base-100 hover:bg-[#CAEB66] text-center px-6 py-8 rounded-3xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* ServiceIcon */}
          <div className="bg-linear-to-br from-[#EEEDFC] to-transparent w-20 h-20 rounded-full inline-flex items-center justify-center">
            <span>
              <FiTruck className="text-4xl" />
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[#03373D] text-xl lg:text-2xl font-bold my-4">
            Express & Standard Delivery
          </h4>

          {/* Description */}
          <p className="text-[#606060] font-medium">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6
            hours from pick-up to drop-off.
          </p>
        </div>

        {/* ServiceItem */}
        <div className="bg-base-100 hover:bg-[#CAEB66] text-center px-6 py-8 rounded-3xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* ServiceIcon */}
          <div className="bg-linear-to-br from-[#EEEDFC] to-transparent w-20 h-20 rounded-full inline-flex items-center justify-center">
            <span>
              <MdPublic className="text-4xl" />
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[#03373D] text-xl lg:text-2xl font-bold my-4">
            Nationwide Delivery
          </h4>

          {/* Description */}
          <p className="text-[#606060] font-medium">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48-72 hours.
          </p>
        </div>

        {/* ServiceItem */}
        <div className="bg-base-100 hover:bg-[#CAEB66] text-center px-6 py-8 rounded-3xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* ServiceIcon */}
          <div className="bg-linear-to-br from-[#EEEDFC] to-transparent w-20 h-20 rounded-full inline-flex items-center justify-center">
            <span>
              <FaBoxes className="text-4xl" />
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[#03373D] text-xl lg:text-2xl font-bold my-4">
            Fulfillment Solution
          </h4>

          {/* Description */}
          <p className="text-[#606060] font-medium">
            We also offer customized service with inventory management support,
            online order processing, packaging and after sales support.
          </p>
        </div>

        {/* ServiceItem */}
        <div className="bg-base-100 hover:bg-[#CAEB66] text-center px-6 py-8 rounded-3xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* ServiceIcon */}
          <div className="bg-linear-to-br from-[#EEEDFC] to-transparent w-20 h-20 rounded-full inline-flex items-center justify-center">
            <span>
              <MdAttachMoney className="text-4xl" />
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[#03373D] text-xl lg:text-2xl font-bold my-4">
            Cash on Home Delivery
          </h4>

          {/* Description */}
          <p className="text-[#606060] font-medium">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>

        {/* ServiceItem */}
        <div className="bg-base-100 hover:bg-[#CAEB66] text-center px-6 py-8 rounded-3xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* ServiceIcon */}
          <div className="bg-linear-to-br from-[#EEEDFC] to-transparent w-20 h-20 rounded-full inline-flex items-center justify-center">
            <span>
              <FaBuilding className="text-4xl" />
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[#03373D] text-xl lg:text-2xl font-bold my-4">
            Corporate Service / Contract In Logistics
          </h4>

          {/* Description */}
          <p className="text-[#606060] font-medium">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>

        {/* ServiceItem */}
        <div className="bg-base-100 hover:bg-[#CAEB66] text-center px-6 py-8 rounded-3xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* ServiceIcon */}
          <div className="bg-linear-to-br from-[#EEEDFC] to-transparent w-20 h-20 rounded-full inline-flex items-center justify-center">
            <span>
              <MdReplay className="text-4xl" />
            </span>
          </div>

          {/* Title */}
          <h4 className="text-[#03373D] text-xl lg:text-2xl font-bold my-4">
            Parcel Return
          </h4>

          {/* Description */}
          <p className="text-[#606060] font-medium">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
