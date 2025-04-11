"use client";

import React from "react";
import { User } from "./Main/Dashboard";
import { formatTime } from "@/lib/time";
import { AnimatePresence, motion } from "framer-motion";
const SelectedMonthSection = ({
  openedMonth,
  user,
}: {
  openedMonth: string | null;
  user: User;
}) => {
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
            className="w-full gap-2 h-full flex flex-col items-center p-2   rounded-md"
          >
            <span className="tracking-widest text-xl">{openedMonth}</span>
            <div className="grow flex w-full lg:gap-4 flex-col lg:flex-row">
              <div className="flex-1 flex flex-col items-center justify-evenly  ">
                <motion.div
                  initial={{ scale: 1, opacity: 0, x: -20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    scale: { duration: 0.1 },
                    opacity: { delay: 0.1 },
                    x: { delay: 0.1 },
                  }}
                  className="flex  flex-col items-center gap-2"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    Average Duration:
                  </span>
                  <span className="text-xl ">
                    {user.workouts[openedMonth.toLowerCase()]?.length > 0
                      ? formatTime(
                          user.workouts[openedMonth.toLowerCase()].reduce(
                            (acc, workout) => acc + (workout.time || 0),
                            0
                          ) / user.workouts[openedMonth.toLowerCase()].length
                        )
                      : "0 min"}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ scale: 1, opacity: 0, x: -20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    scale: { duration: 0.1 },
                    duration: 0.4,
                    ease: "easeInOut",
                    opacity: { delay: 0.2 },
                    x: { delay: 0.2 },
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    Total Time spent:
                  </span>
                  <span className="text-xl   ">
                    {user.workouts[openedMonth.toLowerCase()]?.length > 0
                      ? formatTime(
                          user.workouts[openedMonth.toLowerCase()].reduce(
                            (acc, workout) => acc + (workout.time || 0),
                            0
                          )
                        )
                      : "0 min"}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ scale: 1, opacity: 0, x: -20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    scale: { duration: 0.1 },
                    duration: 0.4,
                    ease: "easeInOut",
                    opacity: { delay: 0.3 },
                    x: { delay: 0.3 },
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    Workout Count:
                  </span>
                  <span className="text-xl">
                    {user.workouts[openedMonth.toLowerCase()]?.length}
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-1 w-full "></div>
            </div>
          </motion.div>
        ) : (
          <span>Click on the bar</span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectedMonthSection;
