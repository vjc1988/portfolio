import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="content-container container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h1>Hi! I'm Victoria Coombs</h1>
              <h2 className="mt-5 mb-4">
                A front-end developer from Lancashire, United Kingdom
              </h2>
              <p>
                I am currently making an exciting career transition from my role
                as a probation officer to the dynamic field of front-end
                development. With a strong background in problem-solving,
                communication, and supporting individuals through challenging
                situations, I am eager to apply these skills to the tech world.
                My decision to pivot into front-end development is driven by my
                passion for technology, creativity, and the desire to build
                user-friendly and impactful digital experiences. As I embark on
                this new journey, I am committed to continuous learning and
                growth, confident that my unique perspective and dedication will
                allow me to thrive in my new career path.
              </p>
              <Link to="./Pages/Projects" class="btn btn-branding mt-5">
                See my featured projects
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="" className="img-fluid mt-5 about-us-image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
