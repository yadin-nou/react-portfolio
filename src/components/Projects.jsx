import React from "react";
import calculatorImg from "../assets/images/calculator.png";
import travel from "../assets/images/travel.png";
import randomUser from "../assets/images/random-User.png";
import notTodo from "../assets/images/not_list.png";

export const Projects = () => {
  return (
    <>
      <section className="projects background " id="project">
        <div className="container">
          <div className="title">Projects</div>
          <div className="projects-container">
            <div className="card">
              <img src={calculatorImg} width="100%" alt="calculator" />
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
                <h4>Prank Calculator Apple version</h4>
                <div> Techstack: HTML, CSSS, Javascript and React JS</div>
              </div>
            </div>
            <div className="card">
              <img src={travel} width="100%" alt="Travel site" />
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
                <h4>Travel Blog</h4>

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
                <h4>Contact List</h4>

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
                    href="https://react-not-todo-list-nine.vercel.app/"
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
                <h4>NOT To List</h4>

                <div> Techstack: HTML, CSSS, Javascript and React JS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
