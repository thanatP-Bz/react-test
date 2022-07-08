import React from "react";

const WorkoutDetails = ({ workout }) => {
  const { title, reps, load, createdAt } = workout;
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
    </div>
  );
};

export default WorkoutDetails;
