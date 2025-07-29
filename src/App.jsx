import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import ExperienceSection from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" index element={<AboutMe />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
