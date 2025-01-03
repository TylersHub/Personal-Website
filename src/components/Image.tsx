interface Props {
  imgSrc: string;
  imgAlt: string;
  imgWidth?: string;
  imgClasses?: string;
}

const Image = ({ imgSrc, imgAlt, imgWidth, imgClasses }: Props) => {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      className={imgClasses}
      style={{
        width: imgWidth,
        display: "block",
        objectFit: "cover",
      }}
    />
  );
};

export default Image;
