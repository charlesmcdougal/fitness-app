import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button + " default-border " + props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
