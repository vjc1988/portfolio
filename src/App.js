import React from "react";
import "./App.css";
import Dictionaryapp from "./Images/Dictionaryapp.png";
import Travelapp from "./Images/Travelapp.png";
import Weatherapp from "./Images/Weatherapp.png";

export default function App() {
  return (
    <div>
      <header className="Container">
        <h2>Hello, I'm</h2>
        <h1>Victoria Coombs</h1>
        <h2>
          Junior Front-End Software Developer based in Lancashire, United
          Kingdom
        </h2>
        <p>
          I like to craft solid and scalable frontend products with great user
          experiences
        </p>
        <a href="/" title="contact me">
          Contact Me
        </a>
      </header>
      <div>
        <h2>Featured Projects</h2>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <img
                src={Travelapp}
                class="img-fluid rounded"
                alt="travel project"
              />
            </div>
            <div class="col-sm-6">
              <h2 class="index-page-titles">Travel App</h2>
              <p class="index-page-p"></p>
              <a href="#" class="home-links" title="launch travel app">
                Launch Travel App
              </a>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm-6">
              <h2 class="index-page-titles">Weather App</h2>
              <p class="index-page-p"></p>
              <a href="#" class="home-links" title="launch weather app">
                Launch Weather App
              </a>
            </div>
            <div class="col-sm-6">
              <img
                src={Weatherapp}
                class="img-fluid rounded"
                alt="weather project"
              />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm-6">
              <img
                src={Dictionaryapp}
                class="img-fluid rounded"
                alt="dictionary project"
              />
            </div>
            <div class="col-sm-6">
              <h2 class="index-page-titles">Dictionary App</h2>
              <p class="index-page-p"></p>
              <a href="#" class="home-links" title="launch dictionary app">
                Launch Dictionary App
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
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
