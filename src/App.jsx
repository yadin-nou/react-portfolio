import "./App.css";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { TopHeader } from "./components/TopHeader";
import mypic from "./assets/yadin.jpg";
import { Aboutme } from "./components/Aboutme";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { useState } from "react";
function App() {
  const handleToggle = () => {
    document.documentElement.classList.toggle("dark-theme");
  };
  return (
    <div className="wrapper">
      {/* Top header */}
      <TopHeader />
      <div className="ch-background" onClick={handleToggle}>
        <i className="fa-solid fa-circle-half-stroke"></i>
      </div>
      {/* Hero Section */}
      <Hero mypic={mypic} />
      {/* experince section */}
      <Experience />
      {/* Skills section */}
      <Skills />
      {/* Project Section */}
      <Projects />
      {/* About me section */}
      <Aboutme mypic={mypic} />
      {/* Contact me */}
      <Contact />
      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;
