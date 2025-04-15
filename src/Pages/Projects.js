import React from "react";
import "./Projects.css";
import Dictionaryapp from "../Images/Dictionaryapp.png";
import Travelapp from "../Images/Travelapp.png";
import Weatherapp from "../Images/Weatherapp.png";
import AIapp from "../Images/AIapp.png";
import Footer from "../Components/Footer";

export default function Projects() {
  return (
    <div>
      <div className="content-container container">
        <div className="row">
          <div className="content">
            <h1 className="project-title mb-5 mt-1">
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
                    className="img-fluid rounded project-image"
                    alt="Travel app"
                  />
                </a>
                <h3 className="text-center mt-5 mb-4">
                  <a
                    href="https://peru-project.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Travel App
                  </a>
                </h3>
                <p className="text-center text-muted project-p mb-4">
                  HTML and CSS Application
                </p>
                <p className="text-justified text-muted project-info">
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
                    className="img-fluid rounded project-image"
                    alt="Weather App"
                  />
                </a>
                <h3 className="text-center mt-5 mb-4">
                  <a
                    href="https://reactwapphomework.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Weather App
                  </a>
                </h3>
                <p className="text-center text-muted project-p mb-4">
                  React.js Application
                </p>
                <p className="text-muted text-justified project-info">
                  I built a JavaScript/React.js weather app with SheCodes
                  Front-End Developer Certified Diploma, an an 8 month coding
                  workshop. Building upon my previously-gained knowledge, I also
                  became skilled in Bootstrap, API’s, real-life development
                  workflow, hosting, and advanced JavaScript. I combined all of
                  these skills to create a fully-functioning weather app.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <a
                  href="https://dictionary-app-vc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Dictionaryapp}
                    className="img-fluid rounded project-image"
                    alt="Dictionary App"
                  />
                </a>
                <h3 className="text-center mt-5 mb-4">
                  <a
                    href="https://dictionary-app-vc.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dictionary App
                  </a>
                </h3>
                <p className="text-center text-muted project-p mb-4">
                  React.js Application
                </p>
                <p className="text-justified text-muted project-info">
                  I immersed myself in React development in SheCodes React. I
                  used my knowledge of this highly-demanded framework to build a
                  working dictionary application incorporating coding best
                  practices, along with the most popular tools and technologies.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <a
                  href="https://ai-riddle-generator.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={AIapp}
                    className="img-fluid rounded project-image"
                    alt="AI Riddle Generator App"
                  />
                </a>
                <h3 className="text-center mt-5 mb-4 project-title">
                  <a
                    href="https://ai-riddle-generator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Riddle Generator
                  </a>
                </h3>
                <p className="text-center text-muted project-p mb-4">
                  AI Integration
                </p>
                <p className="text-justified text-muted project-info">
                  I created an Animal AI-generated riddle generator using a
                  combination of AI integration, HTML, JavaScript, and CSS. The
                  AI component, generates riddles based on user-selected animal.
                  I structured the webpage with HTML, allowing users to choose
                  their preferences through interactive input fields. JavaScript
                  acts as the backbone of the project, managing user
                  interactions and making real-time requests to the AI to fetch
                  new riddles based on those inputs. To make the interface clean
                  and visually engaging, I used CSS for styling, ensuring it was
                  both aesthetically pleasing and responsive across devices.
                  This project offers users an interactive and fun experience by
                  dynamically generating unique riddles tailored to their
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
