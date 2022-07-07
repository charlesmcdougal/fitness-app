// CSS
import classes from "./Exercise.module.css";

// COMPONENTS
import ExerciseAlert from "./ExerciseAlert";
import ExerciseRest from "./ExerciseRest";

// FORM COMPONENTS
import Counter from "../Forms/Counter";
import TimeSelector from "../Forms/TimeSelector";
import Input from "../Forms/Input";
import RoutineTypeSelector from "./RoutineTypeSelector";

//UI COMPONENTS
import Button from "../UI/Button";

// IMAGES
import alarmImage from "../../assets/bell.png";

const Exercise = (props) => {
  return (
    <section className="polkadot-bg default-border flex-centered padding-1">
      <form className="flex-centered flex-column">
        <Input
          type="text"
          label="Exercise Name"
          inputClassName=""
          labelClassName={"block"}
          placeholder=""
        />
        {/* <RoutineTypeSelector /> */}
        <p>
          <span className="hl-color main-bg-dark padding-25">Duration:</span>{" "}
          <Counter initVal="30" />
          <TimeSelector />
        </p>
        <p>
          <Button className="accent-bg-2" type="button">
            add alert
          </Button>
        </p>
        <label>
          <img src={alarmImage} alt="alarm" />
        </label>
        <ExerciseAlert />
        <p>
          <Button className="accent-bg-3" type="button">
            add rest period
          </Button>
        </p>
        <ExerciseRest />
        <Button className="accent-bg-4" type="button">
          save
        </Button>
      </form>
    </section>
  );
};

export default Exercise;
