"use client";

import React from "react";
import { motion } from "framer-motion";
const FadeIn = ({
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
    <motion.div
      initial={{ opacity: 0, x: x, y: y }}
      whileInView={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
      animate={!inView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: duration, ease: "easeInOut", delay: delayTime }}
      viewport={{ once: true, amount: amount }}
      className={classname || ""}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
