import React from "react";
import Navbar from "./Navbar";
import Project from "./Project";
import Footer from "./Footer";

interface Props {
  projLayTitle: string;
  projLayDesc: string;
  projLayHeight: string;
  projLayImage?: string;
}

const ProjPageLayout = ({
  projLayTitle,
  projLayDesc,
  projLayHeight,
  projLayImage = "https://via.placeholder.com/800x400",
}: Props) => {
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
      <Project
        projTitle={projLayTitle}
        projDesc={projLayDesc}
        projLink=""
        projHeight={projLayHeight}
        projImage={projLayImage}
      />
      <Footer
        fText1="Tyler Rosa +1-929-345-5228 18tyler.rosa1@gmail.com"
        fText2=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default ProjPageLayout;
