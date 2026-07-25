import "./App.css";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { TopHeader } from "./components/TopHeader";
import mypic from "./assets/yadin.jpg";
import { Aboutme } from "./components/Aboutme";
function App() {
  return (
    <div className="wrapper">
      {/* Top header */}
      <TopHeader />
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
      {/* footer section */}
    </div>
  );
}

export default App;
