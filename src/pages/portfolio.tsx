import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import projImage1 from "../assets/BulkRenamer_Logo.png";
import "../css/Colors.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Portfolio: React.FC = () => {
  return (
    <div>
      <Navbar
        navMainText="Tyler Rosa"
        navMainLink="/"
        navText1="Portfolio"
        navLink1="/"
        navText2="About"
        navLink2="/About"
        navText3="Contact"
        navLink3="/Contacts"
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
        projImageWidth="28%"
        projBG="main-blue"
      />
      <Project
        projTitle="Pricetunity"
        projDesc="Product Scraping Site"
        projbtnLink="/Project2"
        projbtnText="Learn More"
        projbtnClass="button-hover-animation"
        projImageWidth="28%"
        projBG="main-dark"
      />
      <Project
        projTitle="N/A"
        projDesc="Coming soon..."
        projbtnLink="/Project3"
        projbtnText="Learn More"
        projbtnClass="button-hover-animation"
        projImageWidth="28%"
        projBG="main-blue"
      />
      <div className="main-dark py-5 text-white">
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">
            <h1 className=" d-flex align-items-center justify-content-center py-3">
              Interested? Let's connect
            </h1>
            <ContactForm textAlign="left" />
          </div>
        </div>
      </div>
      <Footer
        fText1="+1-929-345-5228"
        fText2="18tyler.rosa1@gmail.com"
        fText3=" Tyler Rosa. All rights reserved."
      />
      <ScrollToTopButton />
    </div>
  );
};

export default Portfolio;
