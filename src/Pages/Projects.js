import React from "react";
import "./Projects.css";
import Dictionaryapp from "../Images/Dictionaryapp.png";
import Travelapp from "../Images/Travelapp.png";
import Weatherapp from "../Images/Weatherapp.png";
import Footer from "../Components/Footer";

export default function Projects() {
  return (
    <div>
      <div className="content-container container">
        <div className="row">
          <div className="content">
            <h1 className="mb-5 mt-1 text-start">
              Take a look at my featured projects!
            </h1>
            <div className="row">
              <div className="col-md-6 mb-4">
                <a
                  href="https://peru-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Travelapp}
                    class="img-fluid rounded"
                    alt="Travel app"
                  />
                </a>
                <h3 className="text-center">
                  <a
                    href="https://peru-project.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Travel App
                  </a>
                </h3>
                <p className="text-center text-muted">
                  HTML and CSS Application
                </p>
                <p className="text-justified text-muted">
                  I entered the world of front-end development by gaining some
                  knowledge in HTML, CSS, and JavaScript. I used my knowledge of
                  these languages, along with my new skills in VS Code, to build
                  a landing page about travel in Peru.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                {" "}
                <a
                  href="https://reactwapphomework.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Weatherapp}
                    lassName="img-fluid rounded"
                    alt="Weather App"
                  />
                </a>
                <h3 className="text-center">
                  <a
                    href="https://reactwapphomework.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Weather Application
                  </a>
                </h3>
                <p className="text-center text-muted">React.js Application</p>
                <p className="text-muted text-justified">
                  I built a JavaScript/React.js weather app with SheCodes
                  Front-End Developer Certified Diploma, an an 8 month coding
                  workshop. Building upon my previously-gained knowledge, I also
                  became skilled in Bootstrap, API’s, real-life development
                  workflow, hosting, and advanced JavaScript. I combined all of
                  these skills to create a fully-functioning weather app.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <img
                  src={Dictionaryapp}
                  className="img-fluid rounded"
                  alt="Dictionary App"
                />
                <h3 className="text-center">Dictionary App</h3>
                <p className="text-center text-muted">React.js Application</p>
                <p className="text-justified text-muted">
                  I immersed myself in React development in SheCodes React. I
                  used my knowledge of this highly-demanded framework to build a
                  working dictionary application incorporating coding best
                  practices, along with the most popular tools and technologies.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <img
                  src=""
                  className="img-fluid rounded"
                  alt="AI Riddle Generator App"
                />
                <h3 className="text-center">Riddle Generator</h3>
                <p className="text-center text-muted">
                  AI Integrated HTML and CSS
                </p>
                <p className="text-justified text-muted">World Clock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
