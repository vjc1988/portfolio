import React from "react";
import "./Projects.css";
import Footer from "../Components/Footer";

export default function Projects() {
  return (
    <div>
      <div className="content-container container">
        <div className="row">
          <div className="content">
            <h1 className="mb-5">Take a look at my featured projects!</h1>
            <div className="row">
              <div className="col-md-6 mb-4">
                <img src="" class="img-fluid rounded" alt="Travel app" />
                <h3 className="text-center">Travel App</h3>
                <p className="text-center text-muted">P</p>
                <p className="text-justified text-muted">Travel App</p>
              </div>
              <div className="col-md-6 mb-4">
                <img src="" className="img-fluid rounded" alt="Travel App" />
                <h3 className="text-center">Weather App</h3>
                <p className="text-center text-muted">P</p>
                <p className="text-muted text-justified">Weather App</p>
              </div>
              <div className="col-md-6 mb-4">
                <img src="" className="img-fluid rounded" alt="Weather App" />
                <h3 className="text-center">Dictionary App</h3>
                <p className="text-center text-muted">P</p>
                <p className="text-justified text-muted">P</p>
              </div>
              <div className="col-md-6 mb-4">
                <img
                  src=""
                  className="img-fluid rounded"
                  alt="Dictionary App"
                />
                <h3 className="text-center">World Clock</h3>
                <p className="text-center text-muted">P</p>
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
