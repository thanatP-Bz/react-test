import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const { title, reps, load, createdAt } = workout;
  const { dispatch } = useWorkoutContext();

  const clickHandler = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {load}
      </p>
      <p>
        <strong>Reps (kg):</strong>
        {reps}
      </p>
      <p>{createdAt}</p>
      <span onClick={clickHandler}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
