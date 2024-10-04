import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div>
      <div className="main-dark">
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
          className="typewriter h1-container"
          style={{ marginTop: "5vh", padding: "4vh 0" }}
        >
          <div>
            <h1 className="display-2 text-white">Contact Me</h1>
          </div>
        </div>
        <div className="py-5 mb-5">
          <ContactForm formWidth="50%" textAlign="center" />
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

export default Contacts;
