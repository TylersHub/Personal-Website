import React from "react";
import Button from "./Button";
import Image from "./Image";
import meImage from "../assets/me.jpg";

interface Props {
  Hname: string;
  Hsubtext: string;
  custPadding?: string;
}

const HeroSection = ({ Hname, Hsubtext, custPadding }: Props) => {
  return (
    <div>
      <div
        className="jumbotron text-center bg-dark text-white"
        style={{ padding: custPadding }}
      >
        <div className="container">
          <h1 className="display-4">{Hname}</h1>
          <Image imgSrc={meImage} imgAlt="Image of Me" imgWidth="30%" />
          <p className="lead">{Hsubtext}</p>
          <Button btnText="See my work" btnLink="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
