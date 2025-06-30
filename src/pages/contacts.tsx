import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div>
      <div className="main-dark d-flex flex-column min-vh-100">
        <Navbar
          navMainText="Tyler Rosa"
          navMainLink="/"
          navText1="Portfolio"
          navLink1="/"
          navText2="About"
          navLink2="/About"
          navText3="Contact"
          navLink3="/Contacts"
        />
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">
            <div
              className="typewriter h1-container flex-grow-1"
              style={{ marginTop: "2vh", padding: "4vh 0" }}
            >
              <div>
                <h1 className="display-2 text-white">Contact Me</h1>
              </div>
            </div>
            <div
              className="flex-grow-1"
              style={{padding: "0vh 0" }}
            >
              <div>
                <p className="text-white"><b>Need a developer?</b><br></br>I offer a <b>wide range</b> of services in software development to help bring <b>your</b> ideas to <b>life</b>.</p>
              </div>
            
            </div>
            <div className="py-2 mb-5">
              <ContactForm textAlign="center" />
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="social icon-hover icon-hover-big pb-5">
                  <a
                    href="https://www.linkedin.com/in/tylerrosa/"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <div className="px-3"></div>
                  <a href="https://github.com/TylersHub" title="Github">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
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
