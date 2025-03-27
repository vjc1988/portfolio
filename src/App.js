import React from "react";
import "./App.css";
import Dictionaryapp from "./Images/Dictionaryapp.png";
import Travelapp from "./Images/Travelapp.png";
import Weatherapp from "./Images/Weatherapp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div>
      <header className="Container">
        <h2>👋🏼 Hello, I'm</h2>
        <h1>Victoria Coombs</h1>
        <h2>Junior Front-End Developer based in Lancashire, United Kingdom</h2>
        <p className="developer-statement">
          A passionate front-end developer dedicated to creating seamless and
          interactive web experiences
        </p>
        <a href="/" title="contact me" className="btn contact-btn">
          Contact Me
        </a>
      </header>
      <div>
        <h2 className="featured-projects">Featured Projects</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img
                src={Travelapp}
                class="img-fluid rounded"
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
            <div class="col-sm-6">
              <img
                src={Weatherapp}
                className="img-fluid rounded"
                alt="weather project"
              />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm-6">
              <img
                src={Dictionaryapp}
                className="img-fluid rounded"
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
        <a href="mailto:victoriajaynecadd@yahoo.com" className="home-email">
          victoriajaynecadd@yahoo.com
        </a>
        <div className="d-flex justify-content-center group-social-links">
          <a href="https://github.com/vjc1988" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-links" />
          </a>
          <a
            href="https://www.linkedin.com/in/victoria-coombs/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-links" />
          </a>
        </div>
        <footer>
          This website was coded by Victoria Coombs and is{" "}
          <a
            href="https://github.com/vjc1988/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
