import React from "react";
import Navbar from "./Navbar";
import Project from "./Project";
import Footer from "./Footer";

interface Props {
  projLayTitle: string;
  projLayDesc: string;
  projLayHeight: string;
  projLaybtnLink: string;
  projLaybtnText: string;
  projLaybtnClass: string;
  projLaybtn2Link?: string;
  projLaybtn2Text?: string;
  projLaybtn2Class?: string;
  projLayImage?: string;
  projLayImageWidth?: string;
  projLayBG: string;
}

const ProjPageLayout = ({
  projLayTitle,
  projLayDesc,
  projLayHeight,
  projLaybtnLink,
  projLaybtnText,
  projLaybtnClass,
  projLaybtn2Link,
  projLaybtn2Text,
  projLaybtn2Class,
  projLayImage = "https://via.placeholder.com/800x400",
  projLayImageWidth,
  projLayBG,
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
        navText4="Services"
        navLink4="/Services"
      />
      <Project
        projTitle={projLayTitle}
        projDesc={projLayDesc}
        projHeight={projLayHeight}
        projbtnLink={projLaybtnLink}
        projbtnText={projLaybtnText}
        projbtnClass={projLaybtnClass}
        projbtn2Link={projLaybtn2Link}
        projbtn2Text={projLaybtn2Text}
        projbtn2Class={projLaybtn2Class}
        projImage={projLayImage}
        projImageWidth={projLayImageWidth}
        projBG={projLayBG}
      />
      <Footer
        fText1="+1-929-345-5228 18tyler.rosa1@gmail.com"
        fText2=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default ProjPageLayout;
