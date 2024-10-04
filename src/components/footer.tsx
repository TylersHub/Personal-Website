import "../css/TextEffects.css";
import "../css/IconEffects.css";

interface Props {
  fText1: string;
  fText2: string;
  fText3: string;
}

const Footer = ({ fText1, fText2, fText3 }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: "auto",
      }}
    >
      <footer
        className="sticky-bottom main-blue py-3 text-white"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <p className="fs-4 mb-0">{fText1}</p>
        <p className="fs-4 mb-0">{fText2}</p>
        <p className="fs-6 mb-0">
          &copy; {new Date().getFullYear()}
          {fText3}
        </p>

        <div className="social icon-hover">
          <a href="https://www.linkedin.com/in/tylerrosa/" title="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/TylersHub" title="Github">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
