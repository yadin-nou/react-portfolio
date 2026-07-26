import React, { Children } from "react";
import { Outlet, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { TopHeader } from "./TopHeader";

export const Layout = () => {
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

        {/* include outlet instead of children */}
        <main>{<Outlet />}</main>
        <Footer />
      </div>
    </>
  );
};
// **** with layout we created
// export const Layout = ({ children }) => {
//   const handleToggle = () => {
//     document.documentElement.classList.toggle("dark-theme");
//   };
//   return (
//     <>
//       <div className="wrapper">
//         {/* Top header */}
//         <TopHeader />
//         <div className="ch-background" onClick={handleToggle}>
//           <i className="fa-solid fa-circle-half-stroke"></i>
//         </div>
//         <main>{children}</main>
//         <Footer />
//       </div>
//     </>
//   );
// };
