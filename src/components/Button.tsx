import "../css/Button.css";

interface Props {
  btnText?: string;
  btnLink?: string;
  btnClass?: string;
}

const Button = ({ btnText, btnLink, btnClass }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <a href={btnLink} className={btnClass} role="button">
        {btnText}
      </a>
    </div>
  );
};

export default Button;
