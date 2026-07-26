import React from "react";

import cv from "../assets/Yadin-Nou-Resume.pdf";
import { Layout } from "./Layout";
import { Experience } from "./Experience";
export const Hero = ({ mypic }) => {
  return (
    <>
      {/* <Layout> */}
      <header className="hero background-hero">
        {/* <div className="ch-background" onClick={handleToggle}>
          <i className="fa-solid fa-circle-half-stroke"></i>
        </div> */}
        <div className="container" id="home">
          <div className="hero-detail playfair-display">
            <img
              className="img-yadin"
              src={mypic}
              width="100%"
              alt="yadin nou"
            />

            <h5>Hi, I'm Yadin Nou</h5>
            <h1>Full Stack Developer</h1>
            <p>I love coding so much</p>
            <div className="download">
              <a
                href={cv}
                download="Yadin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <i className="fa-solid fa-download fa-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <Experience />
      {/* </Layout> */}
    </>
  );
};
