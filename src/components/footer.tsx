import React from "react";
import "../css/TextEffects.css";

interface Props {
  fText1: string;
  fText2: string;
}

const Footer = ({ fText1, fText2 }: Props) => {
  return (
    <div>
      <footer className="sticky-bottom gray text-center py-4 mt-0">
        <div className="">
          <p className="">{fText1}</p>
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
