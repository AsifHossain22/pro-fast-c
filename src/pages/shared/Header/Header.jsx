import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../../assets/logo.png";

const Header = () => {
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
    <nav className="pt-5 lg:pt-10">
      <div className="navbar bg-base-100 rounded-2xl px-7 py-2 lg:py-4">
        <div className="navbar-start">
          {/* Logo */}
          <Link className="flex mt-4 lg:mt-3 hover:scale-105 transition-transform duration-500">
            <img
              src={logo}
              alt="Logo"
              className="relative bottom-3 w-7 lg:w-auto"
            />{" "}
            <span className="text-[#303030] text-xl lg:text-[32px] font-extrabold -ml-3 lg:-ml-4">
              ProFast
            </span>
          </Link>
        </div>

        {/* DesktopNav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navItems}</ul>
        </div>

        {/* Buttons */}
        <div className="navbar-end hidden lg:flex gap-3">
          <button className="btn px-8 py-4 rounded-xl bg-transparent hover:bg-[#CAEB66] font-semibold border-2 border-[#DADADA] hover:border-[#CAEB66] hover:outline-none transition-all duration-300">
            Sign In
          </button>
          <button className="btn px-8 py-4 rounded-xl bg-[#CAEB66] hover:bg-transparent font-semibold border-2 border-[#CAEB66] hover:border-[#DADADA] hover:outline-none transition-all duration-300">
            Be a Rider
          </button>
        </div>

        {/* MobileNav */}
        <div className="dropdown navbar-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow top-12 -right-6 items-center space-y-4 py-6"
          >
            {navItems}

            {/* Buttons */}
            <div className="flex flex-col lg:hidden gap-3">
              <button className="btn px-4 lg:px-8 py-2 lg:py-4 rounded-xl bg-transparent hover:bg-[#CAEB66] font-semibold border-2 border-[#DADADA] hover:border-[#CAEB66] outline-none text-sm lg:text-base">
                Sign In
              </button>
              <button className="btn px-4 lg:px-8 py-2 lg:py-4 rounded-xl bg-[#CAEB66] hover:bg-transparent font-semibold border-2 border-[#CAEB66] hover:border-[#DADADA] outline-none text-sm lg:text-base">
                Be a Rider
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
