import React from "react";
import Marquee from "react-fast-marquee";
import client1 from "../../../assets/brands/amazon.png";
import client2 from "../../../assets/brands/amazon_vector.png";
import client3 from "../../../assets/brands/casio.png";
import client4 from "../../../assets/brands/moon-star.png";
import client5 from "../../../assets/brands/randstad.png";
import client6 from "../../../assets/brands/start-people.png";
import client7 from "../../../assets/brands/start.png";

const Clients = () => {
  return (
    <section className="max-w-7xl lg:max-w-6xl mx-auto my-7 lg:my-14 px-4 lg:px-0 text-center">
      <h2 className="text-[#03373D] text-xl lg:text-[28px] font-extrabold mb-5 lg:mb-10">
        We've helped thousands of sales teams
      </h2>

      {/* ClientsMarquee */}
      <Marquee pauseOnHover={true} className="hover:cursor-grabbing">
        <div className="flex items-center gap-20">
          <span className="ml-20">
            <img src={client1} alt="Client Image" className="w-full" />
          </span>
          <span>
            <img src={client2} alt="Client Image" className="w-full" />
          </span>
          <span>
            <img src={client3} alt="Client Image" className="w-full" />
          </span>
          <span>
            <img src={client4} alt="Client Image" className="w-full" />
          </span>
          <span>
            <img src={client5} alt="Client Image" className="w-full" />
          </span>
          <span>
            <img src={client6} alt="Client Image" className="w-full" />
          </span>
          <span>
            <img src={client7} alt="Client Image" className="w-full" />
          </span>
        </div>
      </Marquee>
    </section>
  );
};

export default Clients;
