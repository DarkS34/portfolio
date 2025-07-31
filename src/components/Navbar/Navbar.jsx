import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation-menu">
          <li className="navigation-item">
            <Link className="link" to={"/"}>
              ABOUT ME
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="link" to={"/experience"}>
              EXPERIENCE
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="link" to={"/projects"}>
              PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
