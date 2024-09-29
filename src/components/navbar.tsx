import React from "react";

interface Props {
  navMainText: string;
  navText1: string;
  navText2: string;
  navText3: string;
  navText4: string;
}

const Navbar = ({
  navMainText,
  navText1,
  navText2,
  navText3,
  navText4,
}: Props) => {
  return (
    <div className="maxWidth: 100%">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ padding: "0 12rem" }}>
          <a className="navbar-brand" href="#">
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
              <a className="nav-link active" aria-current="page" href="#">
                {navText1}
              </a>
              <a className="nav-link" href="#">
                {navText2}
              </a>
              <a className="nav-link" href="#">
                {navText3}
              </a>
              <a className="nav-link" href="#">
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
