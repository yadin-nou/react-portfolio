import React from "react";
import calculatorImg from "../assets/images/calculator.png";
import travel from "../assets/images/travel.png";
import randomUser from "../assets/images/random-User.png";
import notTodo from "../assets/images/not_list.png";
import { Layout } from "./Layout";
import { Card } from "./Card";
import { Title } from "./Title";

export const Projects = () => {
  const cardDetail = [
    {
      imgPath: calculatorImg,
      gitLink: "https://github.com/yadin-nou/react-calculator-apple",
      proLink: "https://react-calculator-apple.vercel.app/",
      title: "Prank Calculator Apple version",
      description: "Techstack: HTML, CSSS, Javascript and React JS",
    },
    {
      imgPath: travel,
      gitLink: "https://github.com/yadin-nou/flex-box-template",
      proLink: "https://yadin-nou.github.io/flex-box-template/",
      title: "Travel Blog",
      description: "Techstack: HTML, CSSS",
    },
    {
      imgPath: randomUser,
      gitLink: "https://github.com/yadin-nou/contact-list",
      proLink: "https://yadin-nou.github.io/contact-list/",
      title: "Contact List",
      description: "Techstack: HTML, CSSS, Javascript,API and Bootstrap",
    },
    {
      imgPath: notTodo,
      gitLink: "https://github.com/yadin-nou/not-to-list",
      proLink: "https://react-not-todo-list-nine.vercel.app/",
      title: "NOT To List",
      description: "Techstack: HTML, CSSS, Javascript and React JS",
    },
  ];
  return (
    <>
      {/* <Layout> */}
      <section className="projects background " id="project">
        <div className="container">
          {/* <div className="title">Projects</div> */}
          <Title title="Projects" />
          <div className="projects-container">
            {cardDetail.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      <div className="clickTop">
        <a href="#top">
          <i className="fa-solid fa-angles-up fa-2xs"></i>
        </a>
      </div>
      {/* </Layout> */}
    </>
  );
};
