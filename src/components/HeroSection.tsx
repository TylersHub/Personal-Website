import Image from "./Image";
import meImage from "../assets/me.jpg";
import "../css/TextEffects.css";
import "../css/cust-containers.css";

interface Props {
  Hname: string;
  Hsubtext: string;
  Hsubtext2?: string;
  heightPadding?: string;
  addTypewriter?: string;
  pTopMargin?: string;
}

const HeroSection = ({
  Hname,
  Hsubtext,
  Hsubtext2,
  addTypewriter,
  pTopMargin,
}: Props) => {
  return (
    <div className="main-dark text-white container-fluid">
      <div className="row align-items-center">
        {/* Image column */}
        <div className="col-md-6 d-flex justify-content-end p-5">
          <Image
            imgSrc={meImage}
            imgAlt="Image of Me"
            imgWidth="70%"
            imgClasses="rounded-circle"
            imgMargin=""
          />
        </div>

        {/* Text column */}
        <div className="col me-5 pe-5">
          <div className="row pb-5">
            <div className="typewriter">
              <div>
                <h1 className="display-2">{Hname}</h1>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className={`text-center ${addTypewriter}`}>
              <div>
                <p className="lead">{Hsubtext}</p>
              </div>
            </div>
          </div>
          <div className="row pt-4">
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
