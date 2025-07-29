import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="logo-svg"
            data-name="svg-logo-data"
            viewBox="0 0 32 32"
          >
            <path
              fill="#fff"
              d="M20.06,27.31v-6.79c0-.15-.05-.34-.1-.41l-6.45-10.87h1.63c1.81,3.07,4.96,8.42,5.73,9.76,.77-1.34,3.95-6.64,5.89-9.76h1.55l-6.74,10.97c-.05,.1-.08,.21-.08,.39v6.71h-1.42Z"
            />
            <path
              fill="#fff"
              d="M26.84,15.45c0,5.79-3.74,11.06-11.68,11.06-7.23,0-11.45-4.82-11.45-10.91S7.78,4.69,15.42,4.69c7.05,0,11.42,4.58,11.42,10.76Zm-21,.06c0,4.88,3.27,9.49,9.44,9.49,6.65,0,9.44-4.49,9.44-9.52s-3.16-9.28-9.36-9.28c-6.61,0-9.51,4.52-9.51,9.31Z"
            />
          </svg>
        </div>

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
