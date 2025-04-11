"use client";

import { easeInOut, motion } from "framer-motion";
const Heading = () => {
  return (
    <div className="flex flex-col justify-start   text-white mt-[15vh] select-none">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        style={{
          textShadow: "5px 5px 5px black",
        }}
        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
      >
        NO EXCUSES. JUST RESULTS.
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeInOut,delay:0.5 }}
        style={{
          textShadow: "2px 2px 2px black",
        }}
        className="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl "
      >
        Train like a beast. Dominate every rep.
      </motion.span>
    </div>
  );
};

export default Heading;
