import React from "react";

export const TopHeader = () => {
  return (
    <div className="top-header background" id="top">
      <div className="container">
        <div className="name-title">
          <strong>Yadin </strong>
          {/* <hr className="verticle-line" /> */}
          <span className="verticle-line"></span>
          Full Stack Developer
        </div>
        <label htmlFor="ch-menu">
          <i className="fa-solid fa-bars fa-lg"></i>
        </label>
        <input type="checkbox" id="ch-menu" />
        <div className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
