import React from "react";
import { User } from "./Main/Dashboard";

const WorkoutHistory = ({ user }: { user: User }) => {
  return (
    <div className="flex-1 w-full p-2 gap-4 flex overflow-hidden  flex-col">
      <span className="text-xl self-center">Workout History</span>
      <div className="flex flex-col  max-h-70 overflow-y-scroll gap-2">
        {user.lastWorkouts.map((workout, idx) => (
          <div
            className="flex no-scrollbar justify-between p-2 bg-white/20 rounded-md"
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
