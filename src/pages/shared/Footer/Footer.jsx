import React from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
    <footer className="py-10 lg:px-27.5 lg:py-20 rounded-4xl bg-[#0b0b0b] text-[#DADADA] text-center">
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

      <p className="pt-4 w-9/12 lg:w-8/12 mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* FooterNav */}
      <div className="border-t border-b border-dashed border-[#03464D] my-4 lg:my-8 py-4 lg:py-8">
        {/* Nav */}
        <div className="inline-flex flex-wrap">
          <ul className="menu menu-horizontal justify-center items-center px-1 footer-nav space-x-4">
            {navItems}
          </ul>
        </div>
      </div>

      {/* SocialMedia */}
      <div>
        <Link className="p-2.5 rounded-full inline-flex bg-linear-to-r from-[#2489BE] to-[#0575B3] text-black mx-1 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
          <FaLinkedinIn />
        </Link>
        <Link className="p-2.5 rounded-full inline-flex bg-base-100 text-black mx-1 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
          <FaXTwitter />
        </Link>
        <Link className="p-2.5 rounded-full inline-flex bg-linear-to-r from-[#2489BE] to-[#0575B3] text-base-100 mx-1 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
          <FaFacebookF />
        </Link>
        <Link className="p-2.5 rounded-full inline-flex bg-[#FF0000] text-base-100 mx-1 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
          <FaYoutube />
        </Link>
      </div>

      {/* Copyright */}
      <div className="mt-7 mx-4 lg:mx-0">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved. Developed
          by <span className="font-bold text-[#CAEB66]">Hi ASIF</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
