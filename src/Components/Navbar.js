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
            <NavLink to="/" activeclassName="text-muted nav-title">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="./About" className="text-muted nav-title">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="./Projects" className="text-muted nav-title">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="./Contact" className="text-muted nav-title">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
