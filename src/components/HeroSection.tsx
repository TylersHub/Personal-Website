import React from "react";
import Button from "./Button";
import Image from "./Image";
import meImage from "../assets/me.jpg";
import "../css/TextEffects.css";
import "../css/cust-containers.css";

interface Props {
  Hname: string;
  Hsubtext: string;
  Hsubtext2?: string;
  heightPadding?: string;
  addTypewriter?: string;
  pTopMargin?: string;
}

const HeroSection = ({
  Hname,
  Hsubtext,
  Hsubtext2,
  heightPadding,
  addTypewriter,
  pTopMargin,
}: Props) => {
  return (
    <div>
      <div
        className="main-dark text-white cust-container"
        style={{
          display: "flex",
          flexDirection: "row", // Stack the image and text side-by-side
          justifyContent: "space-between", // Ensure proper spacing between the elements
          alignItems: "center", // Align content vertically in the center
          height: "800px", // Set a minimum height for the hero section
          width: "100%",
        }}
      >
        {/* Image Section */}
        <div style={{ minWidth: "350px" }}>
          <Image
            imgSrc={meImage}
            imgAlt="Image of Me"
            imgWidth="70%"
            imgClasses="img-fluid rounded-circle"
            imgMargin=""
          />
        </div>

        {/* Text Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Stack the h1 and p vertically
            justifyContent: "flex-start", // Align text to the top of the container
            flex: 1, // Let the text container take the remaining space
          }}
        >
          {/* h1 with typewriter effect */}
          <div className="typewriter" style={{ marginTop: "50px" }}>
            <div>
              <h1 className="display-2">{Hname}</h1>
            </div>
          </div>
          <div
            className={addTypewriter}
            style={{ marginTop: pTopMargin, width: "20vw" }}
          >
            <div>
              <p className="lead">{Hsubtext}</p>
            </div>
          </div>
          <div
            className={addTypewriter}
            style={{ marginTop: "50px", width: "20vw" }}
          >
            <div>
              <p className="lead">{Hsubtext2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
