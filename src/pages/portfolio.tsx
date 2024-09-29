import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Portfolio: React.FC = () => {
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
        Hname="Hi, I'm Tyler"
        Hsubtext="A passionate developer"
        heightPadding="6rem 0"
      />

      <Project
        projTitle="Project 1"
        projDesc="Project Description"
        projLink=""
        projHeight="6rem 0"
      />
      <Project
        projTitle="Project 2"
        projDesc="Project Description"
        projLink=""
        projHeight="6rem 0"
      />
      <Project
        projTitle="Project 3"
        projDesc="Project Description"
        projLink=""
        projHeight="6rem 0"
      />

      <div>
        <ContactForm formWidth="50%" textAlign="center" />
      </div>

      <Footer
        fText1="Tyler Rosa +1-929-345-5228 18tyler.rosa1@gmail.com"
        fText2=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default Portfolio;
