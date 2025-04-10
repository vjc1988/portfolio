import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import VictoriaCoombs from "../Images/vcLogo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="d-flex justify-content-between">
        <Link to="/">
          <img
            src={VictoriaCoombs}
            alt="victoria-coombs"
            className="logo rounded-circle navImage"
          />
        </Link>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-title active" : "nav-title text-muted"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "nav-title active" : "nav-title text-muted"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive ? "nav-title active" : "nav-title text-muted"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "nav-title active" : "nav-title text-muted"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
