import React from "react";
import Image from "./Image";
import Button from "./Button";

interface Props {
  projTitle: string;
  projDesc: string;
  projbtnLink: string;
  projbtnText: string;
  projbtnClass: string;
  projbtn2Link?: string;
  projbtn2Text?: string;
  projbtn2Class?: string;
  projHeight?: string;
  projImage?: string;
  projBG: string;
}

const Project = ({
  projTitle,
  projDesc,
  projbtnLink,
  projbtnText,
  projbtnClass,
  projbtn2Link,
  projbtn2Text,
  projbtn2Class,
  projHeight,
  projImage = "https://via.placeholder.com/800x400",
  projBG,
}: Props) => {
  return (
    <div>
      <div
        className={projBG}
        style={{
          padding: projHeight, // Set padding separately
          minHeight: "300px", // Set a consistent minimum height for all project sections
          maxHeight: "600px",
          display: "flex", // Use Flexbox to center content
          flexDirection: "column", // Stack content vertically
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          width: "100%",
        }}
      >
        <div className="clearfix">
          <Image
            imgSrc={projImage}
            imgAlt="Project Image"
            imgWidth="90%"
            imgClasses=""
            imgMargin="0 auto"
          />
          <h2 className="mt-3 text-light">{projTitle}</h2>
          <p className="fs-4 text-light">{projDesc}</p>
          <Button
            btnText={projbtnText}
            btnLink={projbtnLink}
            btnClass={projbtnClass}
          />
          <Button
            btnText={projbtn2Text}
            btnLink={projbtn2Link}
            btnClass={projbtn2Class}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
