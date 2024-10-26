import "../css/TextEffects.css";
import "../css/IconEffects.css";

interface Props {
  fText1: string;
  fText2: string;
  fText3: string;
}

const Footer = ({ fText1, fText2, fText3 }: Props) => {
  return (
    <footer className="main-blue py-3 text-white">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3 text-center text-md-start mb-2 mb-md-0">
            <p className="fs-4 mb-0">{fText1}</p>
          </div>
          <div className="col-md-3 text-center mb-2 mb-md-0">
            <p className="fs-4 mb-0">{fText2}</p>
          </div>
          <div className="col-md-3 text-center mb-2 mb-md-0">
            <p className="fs-6 mb-0">
              &copy; {new Date().getFullYear()} {fText3}
            </p>
          </div>
          <div className="col-md-3 text-center text-md-end">
            <div className="social icon-hover">
              <a href="https://www.linkedin.com/in/tylerrosa/" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/TylersHub" title="Github">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
