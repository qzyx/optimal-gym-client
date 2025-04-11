import React from "react";
import { User } from "./Dashboard";

const WorkoutHistory = ({ user }: { user: User }) => {
  return (
    <div className="h-1/2 w-full gap-4 flex overflow-hidden  flex-col">
      <span className="text-xl self-center">Workout History</span>
      <div className="flex flex-col  max-h-70 overflow-scroll gap-2">
        {user.workouts.map((workout, idx) => (
          <div
            className="flex justify-between p-2 bg-white/20 rounded-md"
            key={idx}
          >
            <span>Date: {workout.date}</span>
            <span>{Math.floor(workout.time / 60)} min</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutHistory;
