import React from "react";
import Image from "./Image";

interface Props {
  projTitle: string;
  projDesc: string;
  projLink: string;
  projHeight: string;
  projImage?: string;
}

const Project = ({
  projTitle,
  projDesc,
  projLink,
  projHeight,
  projImage = "https://via.placeholder.com/800x400",
}: Props) => {
  return (
    <div>
      <div
        className="row my-5"
        style={{
          padding: projHeight,
        }}
      >
        <div className="project">
          <Image imgSrc={projImage} imgAlt="Project Image" imgWidth="20%" />
          <h3 className="mt-3">{projTitle}</h3>
          <p>{projDesc}</p>
          <a href={projLink}>{projLink}</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
