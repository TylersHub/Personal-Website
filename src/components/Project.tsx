import Image from "./Image";
import Button from "./Button";

interface Props {
  projTitle: string;
  projDesc: React.ReactNode;
  projbtnLink: string;
  projbtnText: string;
  projbtnClass: string;
  projbtn2Link?: string;
  projbtn2Text?: string;
  projbtn2Class?: string;
  projImage?: string;
  projImageWidth?: string;
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
  projImage = "https://via.placeholder.com/300x200.png/000000/ffffff?text=%3F",
  projImageWidth,
  projBG,
}: Props) => {
  return (
    <div className={`${projBG} text-white container-fluid py-5`}>
      {/* Image Row */}
      <div className="row align-items-center">
        <div className="col-12 d-flex justify-content-center">
          <Image
            imgSrc={projImage}
            imgAlt="Project Image"
            imgWidth={projImageWidth}
            imgClasses=""
          />
        </div>
      </div>
      {/* Text Row */}
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h2 className="mt-3 fw-bold">{projTitle}</h2>
        </div>
      </div>
      {/* Text Row 2 */}
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <p>{projDesc}</p>
        </div>
      </div>
      {/* Button Row */}
      <div className="row">
        <div className="col-12 ">
          <Button
            btnText={projbtnText}
            btnLink={projbtnLink}
            btnClass={projbtnClass}
          />
        </div>
      </div>
      {/* Button Row (off by default)*/}
      <div className="row pt-2">
        <div className="col-12 ">
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
