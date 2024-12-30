import Navbar from "../components/Navbar";
import HeroSection2 from "../components/HeroSection2";
import Footer from "../components/Footer";
import "/src/css/SkillBar.css";

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
        Hsubtext="I'm a College Student with an Associate's Degree in Computer Science. Now pursuing a Bachelor's Degree in Computer Science. I'm a curious and determined programmer/developer, constantly searching for challenges, finding pleasure in problem-solving, and driven by results."
      />
      <div className="text-white container-fluid">
        <div className="main-blue row align-items-center">
          <div className="col-12 col-md ms-lg-5 ps-lg-5 mx-auto text-center">
            <div className="skills">
              <div className="skills-bar">
                <div className="bar">
                  <div className="info">
                    <span>PYTHON</span>
                  </div>
                  <div className="progress-line">
                    <span className="python"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>JAVA</span>
                  </div>
                  <div className="progress-line">
                    <span className="java"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>JAVASCRIPT</span>
                  </div>
                  <div className="progress-line">
                    <span className="javascript"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>TYPESCRIPT</span>
                  </div>
                  <div className="progress-line">
                    <span className="typescript"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md me-lg-5 pe-lg-5 mx-auto text-center">
            <div className="skills">
              <div className="skills-bar">
                <div className="bar">
                  <div className="info">
                    <span>C++</span>
                  </div>
                  <div className="progress-line">
                    <span className="c"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>SQL</span>
                  </div>
                  <div className="progress-line">
                    <span className="sql"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>HTML</span>
                  </div>
                  <div className="progress-line">
                    <span className="html"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>CSS</span>
                  </div>
                  <div className="progress-line">
                    <span className="css"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-dark row align-items-center">
          <div className="col-12 col-md-6 mx-auto text-center">
            <h1 className="fw-bold py-5">Other Technical Skills</h1>
            <p>
              Libraries: React, NumPy, Beautiful Soup, SQLAlchemy, Boost,
              OpenGL, GLFW, ImGui, GLM
            </p>
            <p>Frameworks: Flask, python, Express.js, Selenium</p>
            <p className="pb-1 pb-sm-5">
              Tools: VS Code, Visual Studio, Github,
            </p>
          </div>
        </div>

        <div className="main-dark row justify-content-center">
          <div className="col-12 col-md-6 mx-auto"></div>
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
