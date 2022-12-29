import { workoutContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(workoutContext);

  if (!context) {
    throw Error(
      "useWorkContextHook must be used inside the WorkoutContextProvider"
    );
  }
  return context;
};
