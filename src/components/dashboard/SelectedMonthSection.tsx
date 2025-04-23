"use client";

import { getMonthFromFormatedDate } from "@/helpers/time";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import { Workout } from "@/types/Workout";
import { AnimatePresence, motion } from "framer-motion";
import { monthNames } from "../../../public/monthNames";
import AverageDuration from "./AverageDuration";
import LongestSession from "./LongestSession";
import OpenedMonthWorkoutCount from "./OpenedMonthWorkoutCount";
import ShortestSession from "./ShortestSession";
import TotalTimeSpent from "./TotalTimeSpent";
const SelectedMonthSection = ({
  openedMonth,
  user,
}: {
  openedMonth: string | null;
  user: UserDataFromDatabase;
}) => {
  const workouts = user.workouts.map((workout: string) => JSON.parse(workout));

  const openedWorkouts = workouts.filter(
    (workout: Workout) => getMonthFromFormatedDate(workout.date) === openedMonth
  );
  const shortest = workouts.reduce((min: Workout, current: Workout) =>
    current.duration < min.duration ? current : min
  );
  const longest = workouts.reduce((max: Workout, current: Workout) =>
    current.duration > max.duration ? current : max
  );

  return (
    <div className="flex-1 w-full flex  rounded-md items-center justify-center">
      <AnimatePresence mode="wait">
        {openedMonth ? (
          <motion.div
            key={openedMonth}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full  lg:gap-2 h-full flex flex-col items-center p-2   rounded-md"
          >
            <span className="tracking-widest text-xl flex-col items-center flex">
              <span>{monthNames[openedMonth.toUpperCase()]}</span>
              <span className="text-sm t">Workouts</span>
            </span>
            <div className="grow flex w-full lg:gap-6 flex-col">
              <div className="flex-1 flex items-center justify-between gap-4 pb-8 lg:pb-4 border-b border-gray-700">
                <AverageDuration openedWorkouts={openedWorkouts} />
                <TotalTimeSpent openedWorkouts={openedWorkouts} />
              </div>
              <div className="flex-1 flex gap-4 pt-4 lg:pt-2">
                <OpenedMonthWorkoutCount openedWorkouts={openedWorkouts} />
                <ShortestSession shortest={shortest} />
                <LongestSession longest={longest} />
              </div>
            </div>
          </motion.div>
        ) : (
          <span className="py-40 lg:py-0">
            Open more month info by clicking on it in the chart
          </span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectedMonthSection;
