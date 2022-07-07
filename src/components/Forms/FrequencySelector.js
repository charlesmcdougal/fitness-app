// CSS
import classes from "./Selector.module.css";

const FrequencySelector = () => {
  return (
    <span className={classes.selectorContainer}>
      <select className={classes.selector}>
        <option value="every">every</option>
        <option value="last">the last</option>
        <option value="first">the first</option>
      </select>
      <span className={classes.selectorArrow}></span>
    </span>
  );
};

export default FrequencySelector;
