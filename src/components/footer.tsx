import React from "react";
import "../css/TextEffects.css";
import "../css/IconEffects.css";

interface Props {
  fText1: string;
  fText2: string;
}

const Footer = ({ fText1, fText2 }: Props) => {
  return (
    <div>
      <footer className="sticky-bottom main-gray text-center py-1 mt-0">
        <div className="">
          <p className="fs-4 mb-0">{fText1}</p>
          <p className="fs-6 mb-0">
            &copy; {new Date().getFullYear()}
            {fText2}
          </p>

          <div className="social icon-hover">
            <a href="https://www.linkedin.com/in/tylerrosa/" title="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/TylersHub" title="Github">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
