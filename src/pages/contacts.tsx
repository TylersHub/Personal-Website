import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contacts = () => {
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
        <div
          className="typewriter h1-container flex-grow-1"
          style={{ marginTop: "2vh", padding: "4vh 0" }}
        >
          <div>
            <h1 className="display-2 text-white">Contact Me</h1>
          </div>
        </div>
        <div className="py-2 mb-5">
          <ContactForm formWidth="50%" textAlign="center" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="social icon-hover icon-hover-big mb-1 pb-5">
              <a href="https://www.linkedin.com/in/tylerrosa/" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <div className="px-3"></div>
              <a href="https://github.com/TylersHub" title="Github">
                <i className="bi bi-github"></i>
              </a>
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

export default Contacts;
