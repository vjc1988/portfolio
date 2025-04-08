import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import VictoriaCoombs from "../Images/victoria-coombs.png";

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
            <NavLink to="/" className="text-muted nav-title">
              Home
            </NavLink>
          </li>
          <li>
            <Link to="./About" className="text-muted nav-title">
              About
            </Link>
          </li>
          <li>
            <Link to="./Projects" className="text-muted nav-title">
              Projects
            </Link>
          </li>
          <li>
            <Link to="./Contact" className="text-muted nav-title">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
