import React from "react";
import "../css/Button.css";

interface Props {
  btnText: string;
  btnLink: string;
}

const Button = ({ btnText, btnLink }: Props) => {
  return (
    <div>
      <a href={btnLink} className="button-hover-animation" role="button">
        {btnText}
      </a>
    </div>
  );
};

export default Button;
