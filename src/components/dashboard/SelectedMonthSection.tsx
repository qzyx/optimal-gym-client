"use client";

import { formatTime, getMonthFromFormatedDate } from "@/helpers/time";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
import { Workout } from "@/types/Workout";
import { AnimatePresence, motion } from "framer-motion";
import AverageDuration from "./AverageDuration";
import TotalTimeSpent from "./TotalTimeSpent";
import OpenedMonthWorkoutCount from "./OpenedMonthWorkoutCount";
import { monthNames } from "../../../public/monthNames";
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

  return (
    <div className="flex-1 w-full flex  items-center justify-center">
      <AnimatePresence mode="wait">
        {openedMonth ? (
          <motion.div
            key={openedMonth}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full gap-20 lg:gap-2 h-full flex flex-col items-center p-2   rounded-md"
          >
            <span className="tracking-widest text-xl flex-col items-center flex">
              <span>{monthNames[openedMonth.toUpperCase()]}</span>
              <span className="text-sm t">Workouts</span>
            </span>
            <div className="grow flex w-full lg:gap-4 flex-col lg:flex-row">
              <div className="flex-1 flex flex-col items-center justify-evenly gap-5 lg:gap-0 pb-10 lg:pb-0 ">
                <AverageDuration openedWorkouts={openedWorkouts} />
                <TotalTimeSpent openedWorkouts={openedWorkouts} />
                <OpenedMonthWorkoutCount openedWorkouts={openedWorkouts} />
              </div>
              <div className="flex flex-1 w-full "></div>
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
