import React from "react";
import sectionHeaderImage from "../../../assets/customer-top.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Awlad Hossain",
      role: "Senior Product Designer",
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back and spine.",
    },
    {
      name: "Rasel Ahamed",
      role: "CTO",
      text: "This product changed my workflow completely. Super smooth experience.",
    },
    {
      name: "Nasir Uddin",
      role: "CEO",
      text: "Highly recommend this service. Professional and reliable.",
    },
    {
      name: "John Doe",
      role: "Developer",
      text: "Clean UI and great usability. Loved it.",
    },
    {
      name: "Awlad Hossain",
      role: "Senior Product Designer",
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back and spine.",
    },
    {
      name: "Rasel Ahamed",
      role: "CTO",
      text: "This product changed my workflow completely. Super smooth experience.",
    },
    {
      name: "Nasir Uddin",
      role: "CEO",
      text: "Highly recommend this service. Professional and reliable.",
    },
    {
      name: "John Doe",
      role: "Developer",
      text: "Clean UI and great usability. Loved it.",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto my-7 lg:my-14 px-4 lg:px-0">
      {/* SectionHeader */}
      <div className="text-center">
        {/* Image */}
        <div>
          <img
            src={sectionHeaderImage}
            alt="Testimonial Section Header Image"
            className="mx-auto"
          />
        </div>
        {/* Title */}
        <h2 className="text-[#03373D] text-2xl lg:text-[40px] font-extrabold mt-10 mb-6">
          What our customers are sayings
        </h2>
        {/* Description */}
        <p className="text-[#606060] w-[90%] lg:w-[65%] mx-auto mb-10">
          Enhance posture, mobility and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain and strengthen your body
          with ease!
        </p>
      </div>

      {/* TestimonialSlider */}
      <div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`rounded-2xl p-8 text-center transition-all duration-300
                  ${
                    isActive
                      ? "bg-white scale-100 opacity-100"
                      : "bg-white/50 scale-90 opacity-40"
                  }`}
                >
                  {/* Quote */}
                  <FaQuoteLeft className="text-4xl text-gray-300 mx-auto mb-6" />

                  {/* Text */}
                  <p className="text-gray-600 mb-8 text-sm">{item?.text}</p>

                  {/* User */}
                  <div className="border-t border-dashed pt-4 mt-4">
                    <h3 className="font-semibold text-gray-800">
                      {item?.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item?.role}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PaginationAndButtons */}
        <div className="flex items-center justify-center gap-3 lg:gap-6 mt-5 lg:mt-10 rounded-full mx-auto">
          {/* LeftButton */}
          <button className="custom-prev w-10 h-10 rounded-full p-2 shadow flex items-center justify-center hover:scale-110 transition">
            <FaArrowLeft />
          </button>

          {/* Pagination */}
          <div className="custom-pagination flex items-center gap-2"></div>

          {/* RightButton */}
          <button className="custom-next w-10 h-10 rounded-full p-2 shadow flex items-center justify-center hover:scale-110 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
