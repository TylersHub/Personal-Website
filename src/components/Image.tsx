interface Props {
  imgSrc: string;
  imgAlt: string;
  imgWidth: string;
  imgClasses?: string;
  imgMargin?: string;
}

const Image = ({ imgSrc, imgAlt, imgWidth, imgClasses, imgMargin }: Props) => {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      className={imgClasses}
      style={{
        width: imgWidth,
        display: "block",
        margin: imgMargin,
        objectFit: "cover",
      }}
    />
  );
};

export default Image;
