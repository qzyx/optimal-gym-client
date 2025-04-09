"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const FadeInOut = ({
  children,
  inView = false,
  duration = 0.5,
  delayTime = 0,
  x = 0,
  y = 0,
  classname,
  amount = 0.2,
}: {
  children: React.ReactNode;
  inView?: boolean;
  duration?: number;
  delayTime?: number;
  x?: number;
  y?: number;
  classname?: string;
  amount?: number;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: x, y: y }}
        exit={{ opacity: 0, x: x, y: y }}
        whileInView={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
        animate={!inView ? { opacity: 1, x: 0, y: 0 } : undefined}
        transition={{ duration: duration, ease: "easeInOut", delay: delayTime }}
        viewport={{ once: true, amount: amount }}
        className={classname || ""}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeInOut;
