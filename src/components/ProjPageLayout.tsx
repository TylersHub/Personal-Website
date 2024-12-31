import Navbar from "./Navbar";
import Project from "./Project";
import Footer from "./Footer";

interface Props {
  projLayTitle: string;
  projLayDesc: string;
  projLayHeight: string;
  projLaybtnLink: string;
  projLaybtnText: string;
  projLaybtnClass: string;
  projLaybtn2Link?: string;
  projLaybtn2Text?: string;
  projLaybtn2Class?: string;
  projLayImage?: string;
  projLayImageWidth?: string;
  projLayBG: string;
}

const ProjPageLayout = ({
  projLayTitle,
  projLayDesc,
  projLaybtnLink,
  projLaybtnText,
  projLaybtnClass,
  projLaybtn2Link,
  projLaybtn2Text,
  projLaybtn2Class,
  projLayImage = "https://via.placeholder.com/300x200.png/000000/ffffff?text=%3F",
  projLayImageWidth,
  projLayBG,
}: Props) => {
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
      <Project
        projTitle={projLayTitle}
        projDesc={
          <div className="col-md-6 my-4 mx-auto text-center">{projLayDesc}</div>
        }
        projbtnLink={projLaybtnLink}
        projbtnText={projLaybtnText}
        projbtnClass={projLaybtnClass}
        projbtn2Link={projLaybtn2Link}
        projbtn2Text={projLaybtn2Text}
        projbtn2Class={projLaybtn2Class}
        projImage={projLayImage}
        projImageWidth={projLayImageWidth}
        projBG={projLayBG}
      />
      <Footer
        fText1="+1-929-345-5228"
        fText2="18tyler.rosa1@gmail.com"
        fText3=" Tyler Rosa. All rights reserved."
      />
    </div>
  );
};

export default ProjPageLayout;
