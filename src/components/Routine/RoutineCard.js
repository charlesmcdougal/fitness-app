// UI
import Card from "../UI/Card";

// CSS
import classes from "./RoutineCard.module.css";

// IMAGES
import removeIcon from "../../assets/remove.png";
import editIcon from "../../assets/edit.png";

const RoutineCard = (props) => {
  return (
    <Card className="default-border main-bg-light">
      <div className={classes.cardBanner + " accent-bg-2"}>
        <div>
          <img className={classes.edit} src={editIcon} alt="edit" />
        </div>
        <div className={classes.bannerText}>{props.name}</div>
        <div>
          <img className={classes.remove} src={removeIcon} alt="remove" />
        </div>
      </div>
      <div className={classes.routineText + " flex padding-5"}>
        <div>
          <p>Duration: {props.duration}</p>
          <p>Rest Period: {props.rest}</p>
          <p>Alert: {props.alert}</p>
        </div>
        <div className={classes.arrowContainer}>
          <span className={classes.arrowUp}></span>
          <span className={classes.arrowDown}></span>
        </div>
      </div>
    </Card>
  );
};

export default RoutineCard;
