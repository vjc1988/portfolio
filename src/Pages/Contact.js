import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div>
      <div className="content-container container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h1 className="contact-title">Let's get in touch!</h1>
              <h3 className="contact-me-identifiers">
                Email <FontAwesomeIcon icon={faEnvelope} />
              </h3>
              <p>
                <a href="mailto:victoriajaynecadd@yahoo.com" title="my-email">
                  victoriajaynecadd@yahoo.com
                </a>
              </p>
              <h3 className="contact-me-identifiers">
                Linkedin <FontAwesomeIcon icon={faLinkedin} />
              </h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/victoria-coombs/"
                  target="_blank"
                  rel="noreferrer"
                  title="my-linkedin"
                >
                  Victoria Coombs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
