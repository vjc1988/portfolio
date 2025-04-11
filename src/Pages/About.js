import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import VictoriaCoombs from "../Images/victoria-coombs.png";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div className="content-container-about container">
      <div className="row">
        <div className="col-lg-6">
          <div className="content">
            <h1 className="about-me-hero">Hi! I'm Victoria Coombs</h1>
            <h2 className="about-me-title mt-5 mb-4">
              A front-end developer from Lancashire, United Kingdom
            </h2>
            <p className="about-me-paragraph">
              I am currently making an exciting career transition from my role
              as a probation officer to the dynamic field of front-end
              development. With a strong background in problem-solving,
              communication, and supporting individuals through challenging
              situations, I am eager to apply these skills to the tech world. My
              decision to pivot into front-end development is driven by my
              passion for technology, creativity, and the desire to build
              user-friendly and impactful digital experiences. As I embark on
              this new journey, I am committed to continuous learning and
              growth, confident that my unique perspective and dedication will
              allow me to thrive in my new career path.
            </p>
            <Link
              to="/Projects"
              class="btn btn-branding mt-5 mb-0 featured-projects-btn"
            >
              See my featured projects
            </Link>
          </div>
        </div>
        <div className="col-lg-6 about-me-picture-content">
          <img
            src={VictoriaCoombs}
            className="about-me-image img-fluid mt-5"
            alt="about-me-image"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
