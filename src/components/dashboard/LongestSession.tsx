import React from "react";
import { motion } from "framer-motion";
import { Workout } from "@/types/Workout";
import { formatTime } from "@/helpers/time";
const LongestSession = ({ longest }: { longest: Workout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        scale: { duration: 0.1 },
        opacity: { delay: 0.5 },
        x: { delay: 0.5 },
      }}
      className="flex  gap-2 flex-1 flex-col h-full items-center "
    >
      <span className="text-lg sm:text-xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 animate-text">
        Longest session
      </span>
      <div className="text-xl bg-gradient-to-br h-full w-full  from-black/40 shadow-xl hover:bg-[position:100%_50%] ease-in-out via-purple-800/20 to-black/40 transition-all duration-200  bg-[length:200%_200%] bg-[position:5%_50%] rounded-md p-5   flex flex-col items-center justify-center ">
        <span className="text-sm">{longest.date}</span>
        <span>{longest.duration ? formatTime(longest.duration) : "0"}</span>
      </div>
    </motion.div>
  );
};

export default LongestSession;
