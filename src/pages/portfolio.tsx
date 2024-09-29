import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Portfolio: React.FC = () => {
  return (
    <div>
      <div style={{ maxWidth: "100%" }}>
        <Navbar
          navMainText="Tyler"
          navText1="Portfolio"
          navText2="About"
          navText3="Contact"
          navText4="Other"
        />
      </div>

      <HeroSection
        Hname="Hi, I'm Tyler"
        Hsubtext="A passionate developer"
        custPadding="3rem 0"
      />

      <Project />

      <div>
        <ContactForm formWidth="50%" textAlign="center" />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
