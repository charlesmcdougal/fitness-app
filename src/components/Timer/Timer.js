// REACT
import { useState, useEffect, useRef } from "react";

// UI
import Card from "../UI/Card";
import Button from "../UI/Button";

// LAYOUT
import Header from "../Layout/Header";

// CSS
import "./Timer.css";

//this data will eventually come from outside of this component
const DUMMY_ROUTINE = [
  {
    id: 1,
    name: "Cable-resisted Bicep Curls",
    duration: 10,
    reps: 0,
    color: 2,
    alerts: [10],
  },
  {
    id: 2,
    name: "Rest",
    duration: 10,
    color: "rest",
  },
  {
    id: 3,
    name: "Squats",
    duration: 20,
    reps: 0,
    color: 1,
    alerts: [],
  },
  {
    id: 4,
    name: "Rest",
    duration: 10,
    color: "rest",
  },
  {
    id: 5,
    name: "Push-ups",
    duration: 25,
    reps: 0,
    color: 3,
    alerts: [],
  },
  {
    id: 6,
    name: "Rest",
    duration: 10,
    color: "rest",
  },
  {
    id: 7,
    name: "Pull-Ups",
    duration: 10,
    reps: 0,
    color: 4,
    alerts: [],
  },
  {
    id: 8,
    name: "Rest",
    duration: 10,
    color: "rest",
  },
  {
    id: 9,
    name: "Plank",
    duration: 30,
    reps: 0,
    color: 5,
    alerts: [],
  },
];

// returns h/m/s display from given millisecond value
const updateTimerDisplay = (val) => {
  if (val <= 0) return `0s`;
  if (val < 60) return `${val.toFixed(1)}s`;
  if (val < 3600) return `${Math.floor(val / 60)}m${Math.floor(val % 60)}s`;
  if (val < 3660) return `${Math.floor(val / 3600)}h${Math.floor(val % 60)}s`;
  if (val >= 3660)
    return `${Math.floor(val / 3600)}h${Math.floor(val / 60) % 60}m`;
};

let totalTime = 0; //the total time of the routine
let intervals = []; //the remaining time after each exercise is finished
let currentExercise = 0;

//loop through the array of exercises and sum each duration to get the total time of the routine
DUMMY_ROUTINE.forEach((element) => {
  totalTime += element.duration;
});

//loop through again to get array of intervals from total time
let prevVal = 0;
DUMMY_ROUTINE.forEach((element) => {
  intervals.push(totalTime - prevVal);
  prevVal += element.duration;
});

const Timer = (props) => {
  const [timerDisplay, setTimerDisplay] = useState("0s");
  const [currentTimerDisplay, setCurrentTimerDisplay] = useState("45s");
  const [timerStartedState, setTimerStartedState] = useState(false);
  const [currentExerciseState, setCurrentExerciseState] = useState(0);
  const [currentStrokeValue, setCurrentStrokeValue] = useState(283);
  const [currentOuterStrokeValue, setCurrentOuterStrokeValue] = useState(0);
  const [timerFinished, setTimerFinished] = useState(false);

  //we need a timerStarted ref in addition to a timerStartedState bc
  //state updates are asynchronous and too slow for certain things,
  //but state is still needed for conditional rendering of components, hence both.
  //there's a better way to do this, but my brain refuses to share this info with me
  const timerStarted = useRef(false);
  const remainingRoutineTime = useRef(totalTime); //time in seconds
  const remainingExerciseTime = useRef(DUMMY_ROUTINE[0].duration); //start with duration of first exercise
  let dt = 0; //change in time between each requestAnimationFrame
  let prevTimestamp = 0; // holds the timestamp from requestAnimationFrame
  let counter = 0; //used to reduce the number of render calls

  let totalExerciseTime = DUMMY_ROUTINE[currentExercise].duration;
  const numOfExercises = DUMMY_ROUTINE.length;

  useEffect(() => {
    //update the timer display when the page first loads
    setTimerDisplay(updateTimerDisplay(remainingRoutineTime.current));
    setCurrentTimerDisplay(updateTimerDisplay(remainingExerciseTime.current));
  }, []);

  const startTimer = () => {
    let justStarted = true;
    requestAnimationFrame(function animateTimer(timestamp) {
      dt = timestamp - prevTimestamp;

      //first time through the dt is equal to the timestamp,
      //which is calculated when the page loads, which we don't want!
      if (dt > 50 && justStarted) {
        dt = 0;
        justStarted = false;
      }

      //subtracting the change in time (dt) in ms
      remainingRoutineTime.current = remainingRoutineTime.current - dt / 1000;
      remainingExerciseTime.current = remainingExerciseTime.current - dt / 1000;

      //the timer could go below 0 if the user leaves the screen
      //when time runs out. This will set everything to finished
      if (remainingRoutineTime.current < 0) {
        remainingRoutineTime.current = 0;
        remainingExerciseTime.current = 0;
        setTimerDisplay(updateTimerDisplay(remainingRoutineTime.current));
        setCurrentTimerDisplay(
          updateTimerDisplay(remainingExerciseTime.current)
        );
        setCurrentStrokeValue(0);
        setCurrentOuterStrokeValue(283);
      }

      //only update counter states once every 10th of a second
      //for 60fps systems, every 5th of a second for 30fps systems
      //should improve performance a bit
      if (counter % 6 === 0) {
        setTimerDisplay(updateTimerDisplay(remainingRoutineTime.current));
        setCurrentTimerDisplay(
          updateTimerDisplay(remainingExerciseTime.current)
        );
        setCurrentStrokeValue(
          283 -
            (totalExerciseTime - remainingExerciseTime.current).toFixed(1) /
              (totalExerciseTime / 283)
        );
        setCurrentOuterStrokeValue(
          (totalTime - remainingRoutineTime.current).toFixed(1) /
            (totalTime / 283)
        );
      }

      //timer is going, there is still time left
      if (timerStarted.current && remainingRoutineTime.current > 0) {
        requestAnimationFrame(animateTimer);
        prevTimestamp = timestamp;
        counter++;
        // console.log(currentExercise);
        // console.log(remainingExerciseTime.current);
        if (
          remainingExerciseTime.current <= 0 &&
          currentExercise < numOfExercises
        ) {
          currentExercise++; //move to the next exercise
          totalExerciseTime = DUMMY_ROUTINE[currentExercise].duration;
          remainingExerciseTime.current = totalExerciseTime;
          setCurrentExerciseState(currentExercise);
        }
      }
      //timer has paused but there is still time left
      else if (!timerStarted.current && remainingRoutineTime.current > 0) {
        timerStarted.current = false;
        setTimerStartedState(false);
      }
      //timer has finished
      else {
        timerStarted.current = false;
        setTimerStartedState(false);
        setTimerFinished(true);
      }
    });
  };

  //starts or stops the timer
  const triggerTimer = () => {
    if (!timerStarted.current) {
      timerStarted.current = true;
      setTimerStartedState(true);
      startTimer();
    } else {
      timerStarted.current = false;
      setTimerStartedState(false);
    }
  };

  //sets the timer back to the beginning
  const resetTimer = () => {
    remainingRoutineTime.current = totalTime;
    remainingExerciseTime.current = DUMMY_ROUTINE[0].duration;
    setTimerStartedState(false);
    timerStarted.current = false;
    setTimerFinished(false);
    setTimerDisplay(updateTimerDisplay(remainingRoutineTime.current));
    setCurrentTimerDisplay(updateTimerDisplay(DUMMY_ROUTINE[0].duration));
    setCurrentExerciseState(0);
    currentExercise = 0;
    setCurrentStrokeValue(283);
    setCurrentOuterStrokeValue(0);
  };

  return (
    <main className="wavy-bg">
      <Header />
      <p className="exercise-label main-bg-dark hl-color">now</p>
      <p
        className="current-exercise"
        style={{
          color: `var(--accent-color-${DUMMY_ROUTINE[currentExerciseState].color}`,
        }}
      >
        {DUMMY_ROUTINE[currentExerciseState].name}
      </p>
      <Card className="timer-container flex-centered">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle
              className="outer-timer-ring"
              cx="50"
              cy="50"
              r="45"
            ></circle>
            <circle
              className="inner-timer-ring"
              cx="50"
              cy="50"
              r="38"
            ></circle>
            <path
              key="a"
              className="inner-timer-overlay"
              id="base-timer-path-remaining"
              strokeDasharray={currentStrokeValue + " 283"}
              style={{
                transform: "scale(0.87) rotate(90deg)",
                stroke: `var(--accent-color-${DUMMY_ROUTINE[currentExerciseState].color})`,
              }}
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
            {DUMMY_ROUTINE.map((item, index) => (
              <path
                key={item.id}
                className="outer-timer-exercise"
                id="base-timer-path-remaining"
                strokeDasharray={intervals[index] / (totalTime / 283) + " 283"}
                style={{
                  transform: "rotate(90deg)",
                  stroke: `var(--accent-color-${item.color})`,
                }}
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
              ></path>
            ))}
            <path
              key="b"
              className="outer-timer-overlay"
              id="base-timer-path-remaining"
              strokeDasharray={currentOuterStrokeValue + " 283"}
              style={{ transform: "scaleX(-1) rotate(90deg)" }}
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>
        <span className="countdown flex-centered">{timerDisplay}</span>
        <span className="current-countdown flex-centered">
          {currentTimerDisplay}
        </span>
      </Card>
      <p className="exercise-label main-bg-dark hl-color">up next</p>
      {currentExerciseState < numOfExercises - 1 ? (
        <p
          className="next-exercise"
          style={{
            color: `var(--accent-color-${
              DUMMY_ROUTINE[currentExerciseState + 1].color
            })`,
          }}
        >
          {DUMMY_ROUTINE[currentExerciseState + 1].name}
        </p>
      ) : (
        <p className="next-exercise">Finished!</p>
      )}

      {!timerFinished ? (
        <Button className="accent-bg-3" onClick={triggerTimer}>
          {!timerStartedState ? "Start" : "Pause"}
        </Button>
      ) : (
        <Button className="accent-bg-4">Start</Button>
      )}

      <Button className="accent-bg-2" onClick={resetTimer}>
        Reset
      </Button>
    </main>
  );
};

export default Timer;
