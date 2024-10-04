import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar
        navMainText="Tyler"
        navMainLink="/"
        navText1="Portfolio"
        navLink1="/"
        navText2="About"
        navLink2="/about"
        navText3="Contact"
        navLink3="/contacts"
        navText4="Other"
        navLink4="/"
      />

      <HeroSection
        Hname="About Me!"
        Hsubtext="I'm a College Graduate with an Associate's Degree in Computer Science. Now pursuing a Bachelor's Degree in Computer Science. I'm a curious and determined programmer/developer, constantly searching for challenges, finding pleasure in problem-solving, and driven by results."
        heightPadding="6rem 0"
        pTopMargin="50px"
      />
      <div
        className="main-blue text-white"
        style={{
          padding: "4rem", // Set padding separately
          minHeight: "300px", // Set a consistent minimum height for all project sections
          maxHeight: "700px",
          display: "flex", // Use Flexbox to center content
          flexDirection: "column", // Stack content vertically
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          width: "100%",
        }}
      >
        <h1 className="mt-0 mb-5" style={{ width: "30vw" }}>
          Technical Skills
        </h1>
        <p style={{ width: "50vw" }}>
          Languages: Python, Java, JavaScript, TypeScript, C++, SQL, HTML/CSS
        </p>
        <p style={{ width: "50vw" }}>
          Libraries: React, NumPy, Beautiful Soup, SQLAlchemy, Boost, OpenGL,
          GLFW, ImGui, GLM
        </p>
        <p style={{ width: "50vw" }}>Frameworks: Flask, Express.js, Selenium</p>
      </div>
      <Footer
        fText1="+1-929-345-5228 18tyler.rosa1@gmail.com"
        fText2=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default About;
