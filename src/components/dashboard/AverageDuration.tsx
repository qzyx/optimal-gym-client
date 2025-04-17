import { Workout } from "@/types/Workout";
import React from "react";
import { motion } from "framer-motion";
import { formatTime } from "@/helpers/time";
const AverageDuration = ({ openedWorkouts }: { openedWorkouts: Workout[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        scale: { duration: 0.1 },
        opacity: { delay: 0.1 },
        x: { delay: 0.1 },
      }}
      className="flex  gap-2 flex-1 flex-col h-full items-center"
    >
      <h2 className="text-lg sm:text-xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 animate-text">
        Average Duration
      </h2>
      <div className="text-xl flex bg-gradient-to-br items-center justify-center h-full w-full from-black/40 shadow-xl hover:bg-[position:100%_50%] ease-in-out via-purple-800/20 to-black/40 transition-all duration-200  bg-[length:200%_200%] bg-[position:5%_50%] rounded-md p-5  ">
        {openedWorkouts.length > 0
          ? formatTime(
              openedWorkouts.reduce(
                (acc: number, workout: Workout) =>
                  acc + (workout.duration || 0),
                0
              ) / openedWorkouts.length
            )
          : "0 min"}
      </div>
    </motion.div>
  );
};

export default AverageDuration;
