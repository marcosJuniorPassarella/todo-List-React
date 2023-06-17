import "./Button.css";

const Button = (props: {
  type: "button" | "submit" | "reset";
  onClick: () => void;
  children: any;
}) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
