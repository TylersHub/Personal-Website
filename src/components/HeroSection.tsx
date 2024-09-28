import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="jumbotron text-center bg-dark text-white py-5">
        <div className="container">
          <h1 className="display-4">Hi, I'm [Your Name]</h1>
          <p className="lead">A passionate developer building web solutions</p>
          <a href="#projects" className="btn btn-primary btn-lg mt-3">
            See My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
