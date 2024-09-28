import React from "react";
import Navbar from "../components/Navbar";

const Portfolio: React.FC = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="jumbotron text-center bg-dark text-white py-5">
        <div className="container">
          <h1 className="display-4">Hi, I'm [Your Name]</h1>
          <p className="lead">A passionate developer building web solutions</p>
          <a href="#projects" className="btn btn-primary btn-lg mt-3">
            See My Work
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mt-5" id="projects">
        <h2 className="text-center">Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of Project 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Description of Project 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Project 3"
              />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">Description of Project 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
