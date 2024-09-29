import React from "react";

interface Props {
  imgSrc: string;
  imgAlt: string;
  imgWidth: string;
}

const Image = ({ imgSrc, imgAlt, imgWidth }: Props) => {
  return (
    <div>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="img-fluid"
        style={{
          width: imgWidth,
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default Image;
