import React from "react";
import { User } from "./Main/Dashboard";

const WorkoutHistorySection = ({ user }: { user: User }) => {
  return (
    <div className="flex-1 w-full gap-4 flex overflow-hidden  flex-col">
      <span className="text-xl self-center">Workout History</span>
      <div className="flex flex-col overflow-y-scroll gap-2 no-scrollbar grow max-h-100 lg:max-h-none">
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

export default WorkoutHistorySection;
