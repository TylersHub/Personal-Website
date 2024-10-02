import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div>
      <div className="main-dark" style={{ height: "8rem 0" }}>
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
        <div className="typewriter h1-container" style={{ marginTop: "50px" }}>
          <div>
            <h1 className="display-2 text-white">Contact Me!</h1>
          </div>
        </div>
        <ContactForm formWidth="50%" textAlign="center" style={{}} />
        <Footer
          fText1="Tyler Rosa +1-929-345-5228 18tyler.rosa1@gmail.com"
          fText2=" Tyler Rosa. All rights reserved."
        />
      </div>
    </div>
  );
};

export default Contacts;
