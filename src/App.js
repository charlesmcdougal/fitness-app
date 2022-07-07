import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// LAYOUT COMPONENTS
import Loading from "./components/Layout/Loading";

import Timer from "./components/Timer/Timer";

// CSS - main.css contains many pre-defined styles to apply to all components
import "./main.css";

// ROUTE LOADERS
// const MainRoute = React.lazy(() => import("./routes/MainRoute"));
// const ExerciseRoute = React.lazy(() => import("./routes/ExerciseRoute"));
// const RoutineRoute = React.lazy(() => import("./routes/RoutineRoute"));
// const TimerRoute = React.lazy(() => import("./routes/TimerRoute"));

function App() {
  return (
    <Timer />
    // <React.Fragment>
    //   <Suspense fallback={<Loading />}>
    //     <Routes>
    //       <Route path="/" element={<MainRoute />} />
    //       <Route path="/add-exercise" element={<ExerciseRoute />} />
    //       <Route path="/create-routine" element={<RoutineRoute />} />
    //       <Route path="/timer" element={<TimerRoute />} />
    //     </Routes>
    //   </Suspense>
    // </React.Fragment>
  );
}

export default App;
