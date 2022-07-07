// HOOKS
import { Link } from "react-router-dom";

// CSS
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Link to="/">
      <div className={classes.header}>Fitness Timer</div>
    </Link>
  );
};

export default Header;
