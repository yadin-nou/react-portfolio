import "./App.css";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import mypic from "./assets/yadin.jpg";
import { Aboutme } from "./components/Aboutme";

import { Contact } from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <>
      {/*
        This only wrap the layout which we created manuallly and the component need to include layout as thier parrent.
      <Routes>
        <Route>
          <Route path="/" element={<Hero mypic={mypic} />} />
          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<Aboutme mypic={mypic} />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes> */}

      {/* This will use outlet in the layout component instead of the layout above. so we need to include layout to this App */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Hero mypic={mypic} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<Aboutme mypic={mypic} />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
