import './App.css'
import { Route, Routes } from "react-router-dom";
import AboutMe from './pages/AboutMe/AboutMe';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<AboutMe/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </>
  )
}

export default App
