import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "../css/Colors.css";

const Services = () => {
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
          navText4="Services"
          navLink4="/Services"
        />
        <div
          className="h1-container py-5 text-center mx-auto"
          style={{ marginTop: "52px", maxWidth: "600px" }}
        >
          <h1 className="display-2 text-white fs-1 ">
            Interested in a website like this? Or perhaps your own software
            application? Contact me, and let's work together!
          </h1>
        </div>
        <div className="py-5 mb-5">
          <ContactForm formWidth="50%" textAlign="center" style={{}} />
        </div>
        <Footer
          fText1="+1-929-345-5228 18tyler.rosa1@gmail.com"
          fText2=" Tyler Rosa. All rights reserved."
        />
      </div>
    </div>
  );
};

export default Services;
