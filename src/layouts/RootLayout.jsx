import React from "react";
import { Outlet } from "react-router";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 lg:px-0 sticky top-0 z-50">
        <Header />
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-0">
        <Outlet />
      </main>

      <footer className="max-w-7xl mx-auto px-4 lg:px-0">
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
