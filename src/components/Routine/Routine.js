// REACT
import { useState } from "react";

// LAYOUT COMPONENTS
import Header from "../Layout/Header";

// SECTION COMPONENTS
import RoutineCard from "./RoutineCard";
import Exercise from "./Exercise";

// UI COMPONENTS
import Input from "../Forms/Input";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

// CSS
import classes from "./Routine.module.css";

const Routine = (props) => {
  // [routineList, setRoutineList] = useState([]);

  const addExercise = () => {};

  return (
    <main className="wavy-bg">
      <Modal>
        <Exercise />
      </Modal>
      <Header />
      <Input
        type="text"
        label="Routine Name"
        inputClassName=""
        labelClassName={classes.label + " block"}
        placeholder=""
      />
      <RoutineCard
        name="Jumping Squats"
        duration="30 seconds"
        rest="1 minute"
        alert="at the last 10 seconds"
      />
      <Card className="flex flex-row">
        <Button className="accent-bg-4" onClick={addExercise}>
          add exercise
        </Button>
        <Button className="accent-bg-3">save routine</Button>
      </Card>
      <Button className="main-bg-dark hl-color">Let's do it!</Button>
    </main>
  );
};

export default Routine;
