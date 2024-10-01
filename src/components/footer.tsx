import React from "react";

interface Props {
  fText1: string;
  fText2: string;
}

const Footer = ({ fText1, fText2 }: Props) => {
  return (
    <div>
      <footer className="main-gray text-center py-4 mt-0">
        <div className="container-fluid">
          <p className="mb-0">{fText1}</p>
          <p className="mb-0">
            &copy; {new Date().getFullYear()}
            {fText2}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
