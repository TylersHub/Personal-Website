import Image from "./Image";
import meImage from "../assets/me.png";
import "../css/TextEffects.css";

interface Props {
  Hname: string;
  Hsubtext: string;
  Hsubtext2?: string;
  heightPadding?: string;
  addTypewriter?: string;
}

const HeroSection = ({ Hname, Hsubtext, Hsubtext2, addTypewriter }: Props) => {
  return (
    <div className="main-dark text-white container-fluid">
      <div className="row align-items-center py-5">
        {/* Left column */}
        <div className="col-12 col-lg d-flex justify-content-center justify-content-lg-end p-5">
          <Image
            imgSrc={meImage}
            imgAlt="Image of Me"
            imgWidth="67%"
            imgClasses="rounded-circle"
          />
        </div>

        {/* Right column */}
        <div className="col-12 col-lg me-lg-5 pe-lg-5">
          <div className="row pb-lg-5 pe-4">
            <div className="typewriter">
              <div>
                <h1 className="fw-bold">{Hname}</h1>
              </div>
            </div>
          </div>
          <div className="row pt-lg-3 pe-4">
            <div className={`text-center ${addTypewriter}`}>
              <div>
                <p className="lead">{Hsubtext}</p>
              </div>
            </div>
          </div>
          <div className="row pt-lg-4 pe-4">
            <div className={`text-center ${addTypewriter}`}>
              <div>
                <p className="lead">{Hsubtext2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
