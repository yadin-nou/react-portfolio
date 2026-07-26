import "./App.css";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import mypic from "./assets/yadin.jpg";
import { Aboutme } from "./components/Aboutme";

import { Contact } from "./components/Contact";
import { Outlet, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* // <div className="wrapper"> */}
      {/* Top header */}
      {/* // <TopHeader />
      // <div className="ch-background" onClick={handleToggle}>
      //   <i className="fa-solid fa-circle-half-stroke"></i>
      // </div> */}

      <Routes>
        <Route>
          <Route path="/" element={<Hero mypic={mypic} />} />
          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<Aboutme mypic={mypic} />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

      {/* <Hero mypic={mypic} />
      <Experience />
      <Skills />
      <Projects />
      <Aboutme mypic={mypic} />
      <Contact /> */}
      {/* footer section */}
      {/* <Footer />
      </>
    </div> */}
    </>
  );
};

export default App;
