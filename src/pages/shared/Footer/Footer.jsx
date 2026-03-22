import React from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router";

const Footer = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/" className="transition-all duration-300">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="transition-all duration-300">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="transition-all duration-300">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/coverage" className="transition-all duration-300">
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing" className="transition-all duration-300">
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="transition-all duration-300">
          Be a Rider
        </NavLink>
      </li>
    </>
  );
  return (
    <footer className="px-27.5 py-20 rounded-4xl bg-[#0b0b0b] text-[#DADADA] text-center">
      {/* Logo */}
      <div className="">
        {/* Logo */}
        <Link className="flex justify-center mt-4 lg:mt-3 hover:scale-105 transition-transform duration-500">
          <img
            src={logo}
            alt="Logo"
            className="relative bottom-3 w-7 lg:w-auto"
          />{" "}
          <span className="text-base-100 text-xl lg:text-[32px] font-extrabold -ml-3 lg:-ml-4">
            ProFast
          </span>
        </Link>
      </div>

      <p className="pt-4 w-8/12 mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* FooterNav */}
      <div className="border-t border-b border-dashed border-[#03464D] my-4 lg:my-8 py-4 lg:py-8">
        {/* Nav */}
        <div className="inline-flex">
          <ul className="menu menu-horizontal px-1 footer-nav">{navItems}</ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
