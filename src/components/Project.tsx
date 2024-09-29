import React from "react";
import Image from "./Image";

interface Props {
  projTitle: string;
  projDesc: string;
  projLink: string;
  projHeight: string;
}

const Project = ({ projTitle, projDesc, projLink, projHeight }: Props) => {
  return (
    <div>
      <div
        className="row my-5"
        style={{
          padding: projHeight,
        }}
      >
        <div className="project">
          <Image
            imgSrc="https://via.placeholder.com/800x400"
            imgAlt="Project Image"
            imgWidth="40%"
          />
          <h3 className="mt-3">{projTitle}</h3>
          <p>{projDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
