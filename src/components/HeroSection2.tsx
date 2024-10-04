import Image from "./Image";
import "../css/TextEffects.css";
import "../css/cust-containers.css";
import meImage from "../assets/me.jpg";

interface Props {
  Hname: string;
  Hsubtext: string;
  Hsubtext2?: string;
  addTypewriter?: string;
  pTopMargin?: string;
}

const HeroSection2 = ({
  Hname,
  Hsubtext,
  Hsubtext2,
  addTypewriter,
  pTopMargin,
}: Props) => {
  return (
    <div>
      <div
        className="main-dark text-white cust-container shadow"
        style={{
          display: "flex",
          flexDirection: "row", // Stack the image and text side-by-side
          justifyContent: "space-between", // Ensure proper spacing between the elements
          alignItems: "center", // Align content vertically in the center
          height: "80vh", // Set a minimum height for the hero section
          width: "100%",
        }}
      >
        {/* Left Section (Subtext) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            flex: 1,
          }}
        >
          {/* Subtext */}
          <div
            className={addTypewriter}
            style={{ marginTop: pTopMargin, width: "24vw" }}
          >
            <p className="lead fs-3">{Hsubtext}</p>
          </div>

          {/* Subtext2 */}
          <div className={addTypewriter} style={{ marginTop: "", width: "" }}>
            <p className="lead">{Hsubtext2}</p>
          </div>
        </div>

        {/* Right Section (h1 and Image) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Stack h1 on top of the image
            alignItems: "flex-end", // Left-align items within this container
            justifyContent: "right", // Center content vertically
            flex: 1,

            paddingRight: "50px", // Padding to give space from the edge
          }}
        >
          {/* h1 with typewriter effect */}
          <div className="typewriter mb-4 me-5">
            <h1>{Hname}</h1>
          </div>

          {/* Image */}
          <div className="mt-1" style={{ paddingLeft: "200px" }}>
            <Image
              imgSrc={meImage}
              imgAlt="Image of Me"
              imgWidth="100%"
              imgClasses="img-fluid rounded-circle"
              imgMargin=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
