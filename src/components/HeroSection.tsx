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
      <div className="row align-items-center">
        {/* Left column */}
        <div className="col-12 col-md d-flex justify-content-center justify-content-md-end p-5">
          <Image
            imgSrc={meImage}
            imgAlt="Image of Me"
            imgWidth="70%"
            imgClasses="rounded-circle"
            imgMargin=""
          />
        </div>

        {/* Right column */}
        <div className="col-12 col-md me-md-5 pe-md-5">
          <div className="row pb-md-5">
            <div className="typewriter">
              <div>
                <h1 className="display-2 fw-bold">{Hname}</h1>
              </div>
            </div>
          </div>
          <div className="row pt-md-5">
            <div className={`text-center ${addTypewriter}`}>
              <div>
                <p className="lead">{Hsubtext}</p>
              </div>
            </div>
          </div>
          <div className="row pt-md-4">
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
