import { useEffect } from "react";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import EditWorkoutForm from "../components/EditWorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div>
      <div className="home">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => {
              return <WorkoutDetails key={workout._id} workout={workout} />;
            })}
        </div>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
