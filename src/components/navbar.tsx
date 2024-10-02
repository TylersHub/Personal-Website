import React from "react";
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
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid text-hover-container gray highlightTextIn">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="">
                <a
                  className="fw-bold"
                  aria-current="page"
                  href={navMainLink}
                  style={{ fontWeight: "bold" }}
                  data-alt="Tyler"
                >
                  {navMainText}
                </a>
              </li>
              <li className="">
                <a
                  className=""
                  aria-current="page"
                  href={navLink1}
                  data-alt="Portfolio"
                >
                  {navText1}
                </a>
              </li>
              <li className="">
                <a
                  className=""
                  aria-current="page"
                  href={navLink2}
                  data-alt="About"
                >
                  {navText2}
                </a>
              </li>
              <li className="">
                <a
                  className=""
                  aria-current="page"
                  href={navLink3}
                  data-alt="Contact"
                >
                  {navText3}
                </a>
              </li>
              <li className="">
                <a
                  className=""
                  aria-current="page"
                  href={navLink4}
                  data-alt="Other"
                >
                  {navText4}
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
