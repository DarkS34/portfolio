import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-menu">
        <li className="navigation-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            ABOUT ME
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            EXPERIENCE
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            PROJECTS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
