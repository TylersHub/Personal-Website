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

      <HeroSection
        Hname="Hi, I'm Tyler"
        Hsubtext="A passionate developer"
        heightPadding="6rem 0"
      />

      <Project
        projTitle="BulkRenamer"
        projDesc="A Renaming Tool for Windows"
        projLink="/Project1"
        projHeight="6rem 0"
        projImage={projImage1}
        projBG="main-blue"
      />
      <Project
        projTitle="Web Scraper"
        projDesc="Coming Soon..."
        projLink="/Project2"
        projHeight="6rem 0"
        projBG="main-orange"
      />
      <Project
        projTitle="N/A"
        projDesc="Coming Soon..."
        projLink="/Project3"
        projHeight="6rem 0"
        projBG="main-blue"
      />

      <ContactForm formWidth="50%" textAlign="left" />

      <Footer
        fText1="Tyler Rosa +1-929-345-5228 18tyler.rosa1@gmail.com"
        fText2=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default Portfolio;
