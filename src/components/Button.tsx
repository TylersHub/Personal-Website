import "../css/Button.css";

interface Props {
  btnText?: string;
  btnLink?: string;
  btnClass?: string;
}

const Button = ({ btnText, btnLink, btnClass }: Props) => {
  return (
    <div>
      <a href={btnLink} className={btnClass} role="button">
        {btnText}
      </a>
    </div>
  );
};

export default Button;
