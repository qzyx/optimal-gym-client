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
        {openedWorkouts.length > 0
          ? formatTime(
              openedWorkouts.reduce(
                (acc: number, workout: Workout) =>
                  acc + (workout.duration || 0),
                0
              ) / openedWorkouts.length
            )
          : "0 min"}
      </span>
    </motion.div>
  );
};

export default AverageDuration;
