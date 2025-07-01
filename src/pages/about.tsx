import Navbar from "../components/Navbar";
import HeroSection2 from "../components/HeroSection2";
import Footer from "../components/Footer";
import "/src/css/Timeline.css";

const About = () => {
  return (
    <div>
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

      <HeroSection2
        Hname="About Me!"
        Hsubtext="I'm a computer science student with an Associate's Degree, currently working toward my Bachelor's Degree to further deepen my knowledge and skills in the field. As a curious and driven individual, I enjoy exploring new things, solving problems, and achieving meaningful results. My curiosity fuels a constant pursuit of knowledge and growth, leading me to work on personal projects and seek out opportunities to learn and improve."
      />
      <div className="text-white container-fluid main-blue ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 p-5">
            <h1 className="fw-bold pb-5">Languages</h1>
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="C++"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
                    alt="Solidity"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS"
                    style={{ width: "8vw" }}
                  />
                </div>

                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="C++"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
                    alt="Solidity"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML"
                    style={{ width: "8vw" }}
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS"
                    style={{ width: "8vw" }}
                  />
                </div>
              </div>
            </div>

            {/* <div className="row align-items-center py-5">
      <div className="col-12 col-md mx-auto text-center d-flex flex-wrap justify-content-center gap-3">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" style={{ width: "5vw" }} alt="Python" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" style={{ width: "5vw" }} alt="Java" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={{ width: "5vw" }} alt="JavaScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style={{ width: "5vw" }} alt="TypeScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" style={{ width: "5vw" }} alt="Solidity"/>
      </div>

      <div className="col-12 col-md mx-auto text-center d-flex flex-wrap justify-content-center gap-3">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" style={{ width: "5vw" }} alt="C++" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style={{ width: "5vw" }} alt="CSS3" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style={{ width: "5vw" }} alt="HTML5" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style={{ width: "5vw" }} alt="CSS3" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" style={{ width: "5vw" }} alt="Bootstrap"/>
      </div>
    </div> */}
          </div>
        </div>
        <div className="main-dark row align-items-center">
          <div className="col-12 col-md-6 mx-auto text-center">
            <h1 className="fw-bold py-5">Other Technical Skills</h1>
            <p>
              Libraries: React, NumPy, Beautiful Soup, SQLAlchemy, Boost,
              OpenGL, GLFW, ImGui, GLM
            </p>
            <p>Frameworks: Flask, Bootstrap, Express.js, Selenium</p>
            <p className="pb-1 pb-sm-5">
              Tools: VS Code, Visual Studio, Github, Node.js
            </p>
          </div>
        </div>

        <div className="main-blue row justify-content-center">
          <div className="col mx-auto">
            <section id="cd-timeline" className="cd-container">
              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture"></div>

                <div className="cd-timeline-content">
                  <h2>The City College of New York</h2>
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      Research Assistant - Data Science
                    </span>
                    <span className="timeline-content-info-date">
                      <i className="fa fa-calendar-o" aria-hidden="true"></i>
                      October 2024 - Present
                    </span>
                  </div>
                  <p>
                    Leveraged Python libraries such as Pandas and NumPy to
                    manipulate and analyze datasets efficiently. Researched data
                    related to safety metrics, identifying patterns, trends, and
                    potential risks. Conducted a variety of data science tasks,
                    including data collection, cleaning, preprocessing, and
                    analysis, to extract meaningful insights and inform research
                    outcomes.
                  </p>
                  <ul className="content-skills">
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                  </ul>
                </div>
              </div>

              <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture"></div>
                <div className="cd-timeline-content">
                  <h2>Personaland</h2>
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      Full Stack Developer
                    </span>
                    <span className="timeline-content-info-date">
                      <i className="fa fa-calendar-o" aria-hidden="true"></i>
                      July 2023 - August 2023
                    </span>
                  </div>
                  <p>
                    Created and managed a PostgreSQL database to store and
                    handle data for multiple organizations that ensured
                    scalability and efficient data handling. Developed a web
                    application using HTML, CSS, and JavaScript, incorporating
                    Express.js, Node.js, and Handlebars for dynamic content
                    rendering. Integrated the database into the web application
                    to ensure efficient data flow and functionality for internal
                    users, reducing data access time by up to 90% through
                    real-time display and seamless database interaction.
                  </p>
                  <ul className="content-skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Handlebars</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="row main-dark align-items-center justify-content-center">
          <div className="col-12 col-md-10 pb-3">
            <h1 className="fw-bold py-5">Activities</h1>
            <div className="row">
              <div className="col-6 mx-auto text-center">
                <p className="p-2 p-sm-5">
                  Google x BASTA: Google Software Engineering Mentorship Program
                </p>
              </div>
              <div className="col-6 mx-auto text-center">
                <p className="p-2 p-sm-5">
                  Computer Builder: Built a few custom computers for friends
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 mx-auto text-center">
                <p className="p-2 p-sm-5">
                  QWorld Quantum Computing Workshop: Online Workshop with an
                  introductory course to Quantum computing
                </p>
              </div>
              <div className="col-6  mx-auto text-center">
                <p className="p-2 p-sm-5">
                  Codecademy Computer Science Course: An online course offering
                  a professional computer science certificate
                </p>
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
  );
};

export default About;
