import "../css/Colors.css";
import "../css/Navbar.css";

interface Props {
  navMainText: string;
  navMainLink: string;
  navText1: string;
  navLink1: string;
  navText2: string;
  navLink2: string;
  navText3: string;
  navLink3: string;
  navText4: string;
  navLink4: string;
}

const Navbar = ({
  navMainText,
  navMainLink,
  navText1,
  navLink1,
  navText2,
  navLink2,
  navText3,
  navLink3,
  navText4,
  navLink4,
}: Props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid text-hover-container main-blue highlightTextIn d-flex justify-content-center justify-content-sm-start">
          <button
            className="navbar-toggler button-hover-animation"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarToggler"
          >
            <ul className="navbar-nav mt-sm-0 mt-3 mb-md-0 mb-2 w-100">
              <li>
                <a aria-current="page" href={navLink1} data-alt="Portfolio">
                  {navText1}
                </a>
              </li>
              <li>
                <a aria-current="page" href={navLink2} data-alt="About">
                  {navText2}
                </a>
              </li>
              <li>
                <a aria-current="page" href={navLink3} data-alt="Services">
                  {navText3}
                </a>
              </li>
              <li>
                <a aria-current="page" href={navLink4} data-alt="Contact">
                  {navText4}
                </a>
              </li>
              <li className="ms-md-auto">
                <a
                  className="fw-bold"
                  aria-current="page"
                  href={navMainLink}
                  style={{ fontWeight: "bold" }}
                  data-alt="Tyler Rosa"
                >
                  {navMainText}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
