import React from "react";
import Button from "./Button";
import Image from "./Image";
import meImage from "../assets/me.jpg";
import "../css/TextEffects.css";

interface Props {
  Hname: string;
  Hsubtext: string;
  heightPadding?: string;
}

const HeroSection = ({ Hname, Hsubtext, heightPadding }: Props) => {
  return (
    <div>
      <div
        className="jumbotron text-center main-dark text-white"
        style={{
          padding: heightPadding,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="container-fluid">
          <Image
            imgSrc={meImage}
            imgAlt="Image of Me"
            imgWidth="30%"
            imgPos="float-start px-4"
          />
          <div className="typewriter">
            <div>
              <h1 className="display-4">{Hname}</h1>
            </div>
            <div className="typewriter">
              <p className="lead pt-3">{Hsubtext}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
