import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" index element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
