import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import VictoriaCoombs1 from "../Images/victoria-coombs-1.jpg";

export default function Navbar() {
  return (
    <div>
      <nav className="d-flex justify-content-between">
        <Link to="/">
          <img
            src={VictoriaCoombs1}
            alt="victoria-coombs-1"
            className="logo rounded-circle navImage"
          />
        </Link>
        <ul>
          <li>
            <Link to="/" className="active text-muted nav-titles">
              Home
            </Link>
          </li>
          <li>
            <Link to="./About" className="text-muted nav-titles">
              About
            </Link>
          </li>
          <li>
            <Link to="./Projects" className="text-muted nav-titles">
              Projects
            </Link>
          </li>
          <li>
            <Link to="./Contact" className="text-muted nav-titles">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
