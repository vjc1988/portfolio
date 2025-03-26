import React from "react";
import "./App.css";
import Dictionaryapp from "./Images/Dictionaryapp.png";
import Travelapp from "./Images/Travelapp.png";
import Weatherapp from "./Images/Weatherapp.png";

export default function App() {
  return (
    <div>
      <header className="Container">
        <h2>👋🏼 Hello, I'm</h2>
        <h1>Victoria Coombs</h1>
        <h2>Junior Front-End Developer based in Lancashire, United Kingdom</h2>
        <p>
          I like to craft solid and scalable frontend products with great user
          experiences
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
                {" "}
                Write something about the application
              </p>
              <a
                href="https://peru-project.netlify.app/"
                className="home-links"
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
              <p className="index-page-p"></p>
              <a
                href="https://reactwapphomework.netlify.app/"
                className="home-links"
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
              <p className="index-page-p"></p>
              <a
                href="https://dictionary-app-vc.netlify.app/"
                className="home-links"
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
  return null;
}
