"use client";

import { handleAddStaticWorkout } from "@/lib/appwrite";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import { Workout } from "@/types/Workout";

const WorkoutHistorySection = ({ user }: { user: UserDataFromDatabase }) => {
  const handleClick = async () => {
    handleAddStaticWorkout(3000, new Date(), user.$id);
  };
  const workouts = user.workouts?.map((workout: string) => JSON.parse(workout));
  console.log("user workouts", workouts);

  return (
    <div className="flex-1 w-full gap-4 flex overflow-hidden  flex-col">
      <span className="text-xl self-center">Workout History</span>
      <div className="flex flex-col items-center  overflow-y-scroll gap-2 no-scrollbar grow h-auto max-h-100   lg:max-h-none">
        {workouts && workouts.length > 0 ? (
          workouts.slice(-10).map((workout: Workout, idx: number) => (
            <div
              className="flex no-scrollbar w-full justify-between p-2 bg-white/20 rounded-md"
              key={idx}
            >
              <span>Date: {workout.date}</span>
              <span>{Math.floor(workout.duration / 60)} min</span>
            </div>
          ))
        ) : (
          <>
            <span>No recent workouts</span>
            <button className="cursor-pointer" onClick={() => handleClick()}>
              Add Workout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkoutHistorySection;
