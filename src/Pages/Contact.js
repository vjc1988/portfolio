import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div>
      <div class="content-container container">
        <div class="row">
          <div class="col-lg-6">
            <div class="content">
              <h1>Let's get in touch!</h1>
              <h3>
                Email <FontAwesomeIcon icon={faEnvelope} />
              </h3>
              <p>
                <a href="mailto:victoriajaynecadd@yahoo.com" title="my-email">
                  victoriajaynecadd@yahoo.com
                </a>
              </p>
              <h3>
                Linkedin <FontAwesomeIcon icon={faLinkedin} />
              </h3>
              <p>
                <a href="" target="_blank" title="my-linkedin">
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
