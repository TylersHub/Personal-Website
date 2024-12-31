import Image from "./Image";
import "../css/TextEffects.css";
import meImage from "../assets/me.png";

interface Props {
  Hname: string;
  Hsubtext: string;
  Hsubtext2?: string;
  addTypewriter?: string;
}

const HeroSection2 = ({ Hname, Hsubtext, Hsubtext2, addTypewriter }: Props) => {
  return (
    <div className="main-dark text-white container-fluid">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-12 col-md d-flex justify-content-center justify-content-md-end py-5 ps-lg-5">
          <div className={`${addTypewriter} ps-md-5`}>
            <p className="lead px-md-5 fs-2">{Hsubtext}</p>
          </div>

          <div className={addTypewriter}>
            <p className="lead">{Hsubtext2}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md pe-md-5">
          <div className="row">
            <div className="col-12 typewriter mt-4">
              <div>
                <h1 className="fw-bold">{Hname}</h1>
              </div>
            </div>
          </div>

          <div className="row my-5 ">
            <div className="col-12 d-flex justify-content-center">
              <Image
                imgSrc={meImage}
                imgAlt="Image of Me"
                imgWidth="60%"
                imgClasses="rounded-circle"
                imgMargin=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
