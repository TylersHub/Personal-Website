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
        navLink2="/about"
        navText3="Contact"
        navLink3="/contacts"
        navText4="Other"
        navLink4="/"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          flex: 1,
        }}
      >
        <HeroSection
          Hname="Hi, I'm Tyler"
          Hsubtext={`"He built something..."`}
          Hsubtext2={"COMPUTER SCIENCE | New York City"}
          heightPadding="8rem"
          addTypewriter="typewriter"
          pTopMargin="200px"
        />

        <Project
          projTitle="BulkRenamer"
          projDesc="A Renaming Tool for Windows"
          projbtnLink="/Project1"
          projbtnText="Learn More"
          projHeight="8rem"
          projImage={projImage1}
          projBG="main-blue"
        />
        <Project
          projTitle="Web Scraper"
          projDesc="Coming Soon..."
          projbtnLink="/Project2"
          projbtnText="Learn More"
          projHeight="8rem"
          projBG="main-dark"
        />
        <Project
          projTitle="N/A"
          projDesc="Coming Soon..."
          projbtnLink="/Project3"
          projbtnText="Learn More"
          projHeight="8rem"
          projBG="main-blue"
        />
      </div>

      <ContactForm formWidth="50%" textAlign="left" />

      <Footer
        fText1="Tyler Rosa +1-929-345-5228 18tyler.rosa1@gmail.com"
        fText2=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default Portfolio;
