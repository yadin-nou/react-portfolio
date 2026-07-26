import React from "react";
import { Layout } from "./Layout";
import { Title } from "./Title";

export const Aboutme = ({ mypic }) => {
  return (
    <>
      {/* <Layout> */}
      <section className="aboutme background-hero" id="aboutme">
        <div className="container">
          {/* <div className="title" style={{ color: "var(--white-text)" }}>
            About me
          </div> */}
          <Title title="About me" style={"var(--white-text)"} />
          <div className="content playfair-display">
            <div className="aboutme-pic">
              <img src={mypic} alt="Yadin Nou" />
            </div>
            <div className="aboutme-content">
              <h2>Yadin Nou</h2>
              <p>
                Full Stack Developer with 1+ years of hands-on experience
                building responsive, high-performance web apps using Javascript,
                JSON, HTML, CSS, PHP and MySQL. Currently working in a Transport
                Coordinator role at DHL Supply Chain, gaining exposure to
                large-scale enterprise systems, workflow management, and
                operational processes in a high-volume logistics environment.
                Passionate about building intuitive user experiences and writing
                code that scales.
              </p>

              <h4>Sydney, Australia</h4>

              <h4>Interest</h4>
              <div className="interest">
                <span>Coding</span>
                <span>Football</span>
                <span>Shopping</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
};
