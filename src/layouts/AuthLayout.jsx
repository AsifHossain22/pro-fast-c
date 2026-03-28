import React from "react";
import logo from "../assets/logo.png";
import { Link, Outlet } from "react-router";
import AuthenticationImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <main className="relative">
      {/* Logo */}
      <div className="lg:absolute lg:left-5 lg:top-5 fixed w-full lg:w-auto z-50 backdrop-blur-md lg:backdrop-blur-0 lg:bg-transparent p-5 lg:p-0">
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

      <div className="flex flex-col lg:flex-row items-center min-h-screen bg-base-100">
        {/* OutLet */}
        <div className="flex-1 min-h-screen">
          <div>
            <Outlet />
          </div>
        </div>

        {/* AuthenticationImage */}
        <div className="bg-[#FAFDF0] flex-1 min-h-screen w-full mt-25 lg:mt-0">
          <img
            src={AuthenticationImage}
            alt="Authentication Image"
            className="w-full min-h-screen"
          />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
