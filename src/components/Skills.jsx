import React from "react";
import { Layout } from "./Layout";
export const Skills = () => {
  return (
    <>
      {/* <Layout> */}
      <section className="skills background" id="skill">
        <div className="container">
          <div className="title">Skills</div>
          <div className="sub-skills">
            <div className="subskill-flex">
              <span>
                <i
                  className="fa-brands fa-html5"
                  style={{ color: " rgb(255, 146, 59)" }}
                ></i>
              </span>
              <span>HMTL</span>
            </div>
            <div className="subskill-flex">
              <span>
                <i
                  className="fa-brands fa-css3"
                  style={{ color: " rgb(118, 116, 252)" }}
                ></i>
              </span>
              <span>CSS</span>
            </div>
            <div className="subskill-flex">
              <span>
                <i
                  className="fa-brands fa-js"
                  style={{ color: " rgb(30, 48, 80)" }}
                ></i>
              </span>
              <span>Javscript</span>
            </div>
            <div className="subskill-flex">
              <span>
                <i
                  className="fa-brands fa-github"
                  style={{ color: " rgb(30, 48, 80)" }}
                ></i>
              </span>
              <span>Github</span>
            </div>
            <div className="subskill-flex">
              <span>
                <i
                  className="fa-brands fa-php"
                  style={{ color: " rgb(106, 99, 230)" }}
                ></i>
              </span>
              <span>PHP</span>
            </div>
            <div className="subskill-flex">
              <span>
                <i
                  className="fa-solid fa-database"
                  style={{ color: " rgb(99, 230, 190)" }}
                ></i>
              </span>
              MySQL
            </div>
            {/* <div className="sub-skills"> */}
            <div className="subskill-flex">
              <span>
                <i
                  className="fa-brands fa-react"
                  style={{ color: " rgb(36, 85, 159)" }}
                ></i>
              </span>
              <span>RECT JS</span>
            </div>
            <div className="subskill-flex">
              <span>
                <i
                  className="fa-brands fa-wordpress"
                  style={{ color: " rgb(36, 85, 159)" }}
                ></i>
              </span>
              <span>WordPress</span>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
};
