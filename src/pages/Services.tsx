import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Button from "../components/Button";
import "../css/Colors.css";
import ServiceIcon from "../assets/handshake.png";

const Services = () => {
  return (
    <div>
      <div className="main-dark d-flex flex-column min-vh-100">
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
        <div className="container-fluid text-center flex-grow-1">
          <div className="row justify-content-center align-items-center">
            <div className="col-11 col-md-8 text-center">
              <h2 className="text-white pt-5">
                Interested in having your own website or software application?
                Contact me, and let's work together!
              </h2>
              <Image
                imgSrc={ServiceIcon}
                imgAlt="Service Icon"
                imgWidth="35%"
                imgClasses="pt-2 pt-md-1 mx-auto"
              />
              <Button
                btnLink="/Contacts"
                btnClass="button-hover-animation mt-4 mt-md-0 mb-4"
                btnText="Let's do it"
              />
              <p className="text-white mt-1 py-2">
                Services: Software Development, Full Stack Development, and Web
                Development
              </p>
            </div>
          </div>
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
