import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Portfolio: React.FC = () => {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <Project />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Portfolio;
