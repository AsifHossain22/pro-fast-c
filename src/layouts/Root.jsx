import React from "react";
import { Outlet } from "react-router";
import Header from "../pages/shared/Header/Header";

const Root = () => {
  return (
    <>
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 lg:px-0">
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default Root;
