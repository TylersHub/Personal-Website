import React from "react";

interface Props {
  imgSrc: string;
  imgAlt: string;
  imgWidth: string;
  imgPos?: string;
}

const Image = ({ imgSrc, imgAlt, imgWidth, imgPos }: Props) => {
  return (
    <div>
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`img-fluid ${imgPos}`}
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
