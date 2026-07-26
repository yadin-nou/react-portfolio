import React from "react";
import { Layout } from "./Layout";

export const Contact = () => {
  return (
    <>
      {/* <Layout> */}
      <section className="contact background" id="contact">
        <div className="container">
          <div className="title">Contact</div>
        </div>
        <div className="contact-logo">
          <div className="contact-link">
            <span>
              <a
                href="https://www.linkedin.com/in/yadin-nou-0040971b/"
                target="_blank"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "var(--black-text)" }}
                ></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/yadin-nou" target="_blank">
                <i
                  className="fa-brands fa-github"
                  style={{ color: " rgb(30, 48, 80)" }}
                ></i>
              </a>
            </span>
            <span>
              <a href="#">
                <i
                  className="fa-brands fa-youtube"
                  style={{ color: "var(--black-text)" }}
                ></i>
              </a>
            </span>
            <span>
              <a href="#">
                <i
                  className="fa-brands fa-facebook"
                  style={{ color: "var(--black-text)" }}
                ></i>
              </a>
            </span>
          </div>
          <div className="r-class">OR</div>
          <div className="email">
            nouyadin@gmail.com &nbsp;
            <a href="mailto:nouyadin@gmail.com">
              <i
                className="fa-regular fa-paper-plane fa-sm"
                style={{ color: " rgb(221, 11, 11)" }}
              ></i>
            </a>
          </div>
        </div>
      </section>
      {/* </Layout> */}
    </>
  );
};
