import { createContext, useReducer } from "react";
import workoutsReducer from "./workoutsReducer";

const workoutContext = createContext();

const workouts = { workouts: null };

const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, workouts);

  return (
    <workoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </workoutContext.Provider>
  );
};

export { workoutContext, WorkoutContextProvider };
