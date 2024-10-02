import React from "react";
import Image from "./Image";
import Button from "./Button";

interface Props {
  projTitle: string;
  projDesc: string;
  projbtnLink: string;
  projbtnText: string;
  projHeight?: string;
  projImage?: string;
  projBG: string;
}

const Project = ({
  projTitle,
  projDesc,
  projbtnLink,
  projbtnText,
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
          <Button btnText={projbtnText} btnLink={projbtnLink} />
        </div>
      </div>
    </div>
  );
};

export default Project;
