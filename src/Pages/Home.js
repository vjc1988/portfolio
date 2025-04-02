import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import Dictionaryapp from "../Images/Dictionaryapp.png";
import Travelapp from "../Images/Travelapp.png";
import Weatherapp from "../Images/Weatherapp.png";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <header className="Container">
        <h2 className="title">👋🏼 Hello, I'm</h2>
        <h1>Victoria Coombs</h1>
        <h2>Junior Front-End Developer based in Lancashire, United Kingdom</h2>
        <p className="developer-statement">
          A passionate front-end developer dedicated to creating seamless and
          interactive web experiences
        </p>
        <Link to="/Contact" className="btn contact-btn">
          Contact Me
        </Link>
      </header>
      <div>
        <h2 className="featured-projects">Featured Projects</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img
                src={Travelapp}
                className="img-fluid rounded project-image"
                alt="travel project"
              />
            </div>
            <div className="col-sm-6">
              <h2 className="index-page-titles">Travel App</h2>
              <p className="index-page-p">
                I entered the world of front-end development by gaining some
                knowledge in HTML, CSS, and JavaScript. I used my knowledge of
                these languages, along with my new skills in VS Code, to build a
                landing page about travel in Peru.
              </p>
              <a
                href="https://peru-project.netlify.app/"
                className="btn home-links"
                title="launch travel app"
                target="_blank"
                rel="noreferrer"
              >
                Launch Travel App
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6">
              <h2 className="index-page-titles">Weather App</h2>
              <p className="index-page-p">
                I built a JavaScript/React.js weather app with SheCodes
                Front-End Developer Certified Diploma, an an 8 month coding
                workshop. Building upon my previously-gained knowledge, I also
                became skilled in Bootstrap, API’s, real-life development
                workflow, hosting, and advanced JavaScript. I combined all of
                these skills to create a fully-functioning weather app.
              </p>
              <a
                href="https://reactwapphomework.netlify.app/"
                className=" btn home-links"
                title="launch weather app"
                target="_blank"
                rel="noreferrer"
              >
                Launch Weather App
              </a>
            </div>
            <div className="col-sm-6">
              <img
                src={Weatherapp}
                className="img-fluid rounded project-image"
                alt="weather project"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6">
              <img
                src={Dictionaryapp}
                className="img-fluid rounded project-image"
                alt="dictionary project"
              />
            </div>
            <div className="col-sm-6">
              <h2 className="index-page-titles">Dictionary App</h2>
              <p className="index-page-p">
                I immersed myself in React development in SheCodes React. I used
                my knowledge of this highly-demanded framework to build a
                working dictionary application incorporating coding best
                practices, along with the most popular tools and technologies.
              </p>
              <a
                href="https://dictionary-app-vc.netlify.app/"
                className=" btn home-links"
                title="launch dictionary app"
                target="_blank"
                rel="noreferrer"
              >
                Launch Dictionary App
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <Footer />
      </div>
    </div>
  );
}
