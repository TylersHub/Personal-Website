import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Button from "../components/Button";
import "../css/Colors.css";
import ServiceIcon from "../assets/handshake.png";

const Services = () => {
  return (
    <div>
      <div className="main-dark" style={{ height: "100vh" }}>
        <Navbar
          navMainText="Tyler"
          navMainLink="/"
          navText1="Portfolio"
          navLink1="/"
          navText2="About"
          navLink2="/About"
          navText3="Services"
          navLink3="/Services"
          navText4="Contact"
          navLink4="/Contacts"
        />
        <div
          className="h1-container text-center mb-3 mx-auto"
          style={{ marginTop: "5vh", maxWidth: "600px", padding: "3vh 0" }}
        >
          <h1 className="display-2 text-white fs-1 ">
            Interested in having your own website? Or even your own software
            application? Contact me, and let's work together!
          </h1>
          <Image
            imgSrc={ServiceIcon}
            imgAlt="Project Image"
            imgWidth="48%"
            imgClasses="pt-2"
            imgMargin="0 auto"
          />
          <Button
            btnLink="/Contacts"
            btnClass="button-hover-animation mb-5"
            btnText="Let's do it"
          />
        </div>
        <Footer
          fText1="+1-929-345-5228"
          fText2="18tyler.rosa1@gmail.com"
          fText3=" Tyler Rosa. All rights reserved."
        />
      </div>
    </div>
  );
};

export default Services;
