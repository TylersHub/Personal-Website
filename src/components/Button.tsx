import React from "react";

interface Props {
  btnText: string;
  btnLink: string;
}

const Button = ({ btnText, btnLink }: Props) => {
  return (
    <div>
      <a href={btnLink} className="btn btn-primary" role="button">
        {btnText}
      </a>
    </div>
  );
};

export default Button;
