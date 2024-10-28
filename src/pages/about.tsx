import Navbar from "../components/Navbar";
import HeroSection2 from "../components/HeroSection2";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
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

      <HeroSection2
        Hname="About Me!"
        Hsubtext="I'm a College Graduate with an Associate's Degree in Computer Science. Now pursuing a Bachelor's Degree in Computer Science. I'm a curious and determined programmer/developer, constantly searching for challenges, finding pleasure in problem-solving, and driven by results."
      />
      <div className="main-blue text-white container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mx-auto text-center">
            <h1 className="fw-bold py-4">Technical Skills</h1>
            <p>
              Languages: Python, Java, JavaScript, TypeScript, C++, SQL,
              HTML/CSS
            </p>
            <p>
              Libraries: React, NumPy, Beautiful Soup, SQLAlchemy, Boost,
              OpenGL, GLFW, ImGui, GLM
            </p>
            <p className="pb-1 pb-sm-5">
              Frameworks: Flask, Bootstrap, Express.js, Selenium
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
  );
};

export default About;
