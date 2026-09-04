import React from "react";
import calculatorImg from "../assets/images/calculator.png";
import movieWorld from "../assets/images/movie-world.png";
import randomUser from "../assets/images/random-User.png";
import notTodo from "../assets/images/not_list.png";
import ft_tracker from "../assets/images/ft-tracker.png";
import { Layout } from "./Layout";
import { Card } from "./Card";
import { Title } from "./Title";

export const Projects = () => {
  const cardDetail = [
    {
      imgPath: ft_tracker,
      gitLink: "https://github.com/yadin-nou/backend-ft",
      proLink: "https://finance-tracker-nine-smoky.vercel.app/",
      title: "Financial Tracker App",
      description:
        "HTML, CSS, Javascript,React JS,JWT, Contact API, Redux, Nodemailer, Node, MongoDB and express.js",
    },
    {
      imgPath: notTodo,
      gitLink: "https://github.com/yadin-nou/not-to-list",
      proLink: "https://full-stack-development-mern-r34r.onrender.com/",
      title: "NOT To List",
      description: "HTML, CSS, Javascript,React JS, Node and express.js",
    },

    {
      imgPath: movieWorld,
      gitLink: "https://github.com/yadin-nou/movie-world",
      proLink: "https://movie-world-sooty.vercel.app/",
      title: "Movie World",
      description: "HTML, CSS, Javascript,bootstrap, API and ReactJS",
    },
    {
      imgPath: randomUser,
      gitLink: "https://github.com/yadin-nou/contact-list",
      proLink: "https://yadin-nou.github.io/contact-list/",
      title: "Contact List",
      description: "HTML, CSS, Javascript, API  and Bootstrap",
    },
    {
      imgPath: calculatorImg,
      gitLink: "https://github.com/yadin-nou/react-calculator-apple",
      proLink: "https://react-calculator-apple.vercel.app/",
      title: "Prank Calculator Apple version",
      description: "HTML, CSS, Javascript and React JS",
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
