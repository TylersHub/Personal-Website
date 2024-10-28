import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import projImage1 from "../assets/BulkRenamer_Logo.png";
import "../css/Colors.css";

const Portfolio: React.FC = () => {
  return (
    <div>
      <Navbar
        navMainText="Tyler"
        navMainLink="/"
        navText1="Portfolio"
        navLink1="/"
        navText2="About"
        navLink2="/About"
        navText3="Services"
        navLink3="/Services"
        navText4="Contact"
        navLink4="/Contacts"
      />
      <HeroSection
        Hname="Hi, I'm Tyler"
        Hsubtext={`"He built something..."`}
        Hsubtext2={"COMPUTER SCIENCE | New York City"}
        heightPadding="8rem"
        addTypewriter="typewriter"
      />

      <Project
        projTitle="BulkRenamer"
        projDesc="A Handy Tool for Windows"
        projbtnLink="/Project1"
        projbtnText="Learn More"
        projbtnClass="button-hover-animation"
        projImage={projImage1}
        projBG="main-blue"
      />
      <Project
        projTitle="Web Scraper"
        projDesc="Coming Soon..."
        projbtnLink="/Project2"
        projbtnText="Learn More"
        projbtnClass="button-hover-animation"
        projBG="main-dark"
      />
      <Project
        projTitle="N/A"
        projDesc="Coming Later..."
        projbtnLink="/Project3"
        projbtnText="Learn More"
        projbtnClass="button-hover-animation"
        projBG="main-blue"
      />
      <div className="main-dark py-5 text-white">
        <h1 className=" d-flex align-items-center justify-content-center py-5">
          Interested? Let's connect
        </h1>
        <ContactForm formWidth="50%" textAlign="left" />
      </div>
      <Footer
        fText1="+1-929-345-5228"
        fText2="18tyler.rosa1@gmail.com"
        fText3=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default Portfolio;
