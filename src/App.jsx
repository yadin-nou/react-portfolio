import "./App.css";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { TopHeader } from "./components/TopHeader";

function App() {
  return (
    <div className="wrapper">
      {/* Top header */}
      <TopHeader />
      {/* Hero Section */}
      <Hero />
      {/* experince section */}
      <Experience />
      {/* Skills section */}
      {/* Project Section */}
      {/* About me section */}
      {/* footer section */}
    </div>
  );
}

export default App;
