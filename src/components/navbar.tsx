import React from "react";

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
    <div className="maxWidth: 100%">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ padding: "0 13rem" }}>
          <a className="navbar-brand" href={navMainLink}>
            {navMainText}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href={navLink1}
              >
                {navText1}
              </a>
              <a className="nav-link" href={navLink2}>
                {navText2}
              </a>
              <a className="nav-link" href={navLink3}>
                {navText3}
              </a>
              <a className="nav-link" href={navLink4}>
                {navText4}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
