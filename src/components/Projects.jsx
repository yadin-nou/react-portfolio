import React from "react";
import calApple from "/assets/images/calculator.png";
import travel from "/assets/images/travel.png";
import randomUser from "/assets/images/randomUser-User.png";
import notTodo from "/assets/images/not_list.png";

export const Projects = () => {
  return (
    <>
      <section className="projects background " id="project">
        <div className="container">
          <div className="title">Projects</div>
          <div className="projects-container">
            <div className="card">
              <img src={calApple} width="100%" alt="calculator" />
              <div className="git-link">
                <span>
                  <a
                    href="https://github.com/yadin-nou/react-calculator-apple"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-github"
                      style={{
                        color: "rgb(36,85,159)",
                        fontSize: "1rem !important",
                      }}
                    ></i>
                  </a>
                </span>
                <span>
                  <a
                    href={"https://react-calculator-apple.vercel.app/"}
                    target="_blank"
                  >
                    <i
                      className="fa-solid fa-link"
                      style={{
                        color: "rgb(36,85,159)",
                        fontSize: "1rem !important",
                      }}
                    ></i>
                  </a>
                </span>
              </div>
              <div className="pro-title">
                <h3>Prank Calculator Apple version</h3>
                <div> Techstack: HTML, CSSS, Javascript</div>
              </div>
            </div>
            <div className="card">
              <img src={travel} width="100%" alt="calculator" />
              <div className="git-link">
                <span>
                  <a
                    href="https://github.com/yadin-nou/flex-box-template"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-github"
                      style={{
                        color: "rgb(36,85,159)",
                        fontSize: "1rem !important",
                      }}
                    ></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://yadin-nou.github.io/flex-box-template/"
                    target="_blank"
                  >
                    <i
                      className="fa-solid fa-link"
                      style={{
                        color: "rgb(36,85,159)",
                        fontSize: "1rem !important",
                      }}
                    ></i>
                  </a>
                </span>
              </div>
              <div className="pro-title">
                <h3>Travel Blog</h3>

                <div> Techstack: HTML, CSSS</div>
              </div>
            </div>
            <div className="card">
              <img src={randomUser} alt="randomUser" />

              <div className="git-link">
                <span>
                  <a
                    href="https://github.com/yadin-nou/contact-list"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-github"
                      style={{
                        color: "rgb(36,85,159)",
                        fontSize: "1rem !important",
                      }}
                    ></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://yadin-nou.github.io/contact-list/"
                    target="_blank"
                  >
                    <i
                      className="fa-solid fa-link"
                      style={{
                        color: "rgb(36,85,159)",
                        fontSize: "1rem !important",
                      }}
                    ></i>
                  </a>
                </span>
              </div>
              <div className="pro-title">
                <h3>Contact List</h3>

                <div> Techstack: HTML, CSSS, Javascript,API and Bootstrap</div>
              </div>
            </div>
            <div className="card">
              <img src={notTodo} alt="NotToDoList" />

              <div className="git-link">
                <span>
                  <a
                    href="https://github.com/yadin-nou/not-to-list"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-github"
                      style={{
                        color: "rgb(36,85,159)",
                        fontSize: "1rem !important",
                      }}
                    ></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://yadin-nou.github.io/not-to-list/"
                    target="_blank"
                  >
                    <i
                      className="fa-solid fa-link"
                      style={{
                        color: "rgb(36,85,159)",
                        fontSize: "1rem !important",
                      }}
                    ></i>
                  </a>
                </span>
              </div>
              <div className="pro-title">
                <h3>NOT To List</h3>

                <div> Techstack: HTML, CSSS, Javascript</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
