import React from "react";
import Button from "./Button";
import Image from "./Image";
import meImage from "../assets/me.jpg";

interface Props {
  Hname: string;
  Hsubtext: string;
  heightPadding?: string;
}

const HeroSection = ({ Hname, Hsubtext, heightPadding }: Props) => {
  return (
    <div>
      <div
        className="jumbotron text-center bg-dark text-white"
        style={{ padding: heightPadding }}
      >
        <div className="container">
          <h1 className="display-4">{Hname}</h1>
          <Image imgSrc={meImage} imgAlt="Image of Me" imgWidth="30%" />
          <p className="lead">{Hsubtext}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
