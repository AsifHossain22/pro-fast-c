import React from "react";
import bannerSlider1 from "../../../assets/banner/banner1.png";
import bannerSlider2 from "../../../assets/banner/banner2.png";
import bannerSlider3 from "../../../assets/banner/banner3.png";

// ImportSwiperReactComponents
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// ImportSwiperStyles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section className="w-full my-7 lg:my-14">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-4xl cursor-grab active:cursor-grabbing"
      >
        <SwiperSlide>
          <img
            src={bannerSlider1}
            className="w-full h-full object-contain block"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={bannerSlider2}
            className="w-full h-full object-contain block"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={bannerSlider3}
            className="w-full h-full object-contain block"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
