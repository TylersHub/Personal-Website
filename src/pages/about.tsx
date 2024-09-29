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
      About
      <Footer
        fText1="Tyler Rosa +1-929-345-5228 18tyler.rosa1@gmail.com"
        fText2=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default About;
