import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
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
      <div className="contact-box-index d-flex justify-content-between mb-5 d-none d-md-flex">
        <div>
          <h3>Work Enquiry</h3>
          <p className="work-together-title">Let's work together!</p>
        </div>
        <div>
          <Link to="/Contact" className="btn btn-branding mt-3">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
