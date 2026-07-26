import React, { Children } from "react";
import { Route } from "react-router-dom";
import { Footer } from "./Footer";
import { TopHeader } from "./TopHeader";

export const Layout = ({ children }) => {
  const handleToggle = () => {
    document.documentElement.classList.toggle("dark-theme");
  };
  return (
    <>
      <div className="wrapper">
        {/* Top header */}
        <TopHeader />
        <div className="ch-background" onClick={handleToggle}>
          <i className="fa-solid fa-circle-half-stroke"></i>
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
