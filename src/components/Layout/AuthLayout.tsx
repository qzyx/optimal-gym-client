"use client";

import { motion } from "framer-motion";
import React from "react";
const AuthLayout = ({
  children,
  pageKey,
}: {
  children: React.ReactNode;
  pageKey: string;
}) => {
  return (
    <div className="flex justify-center items-center select-none  ">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-[90%] max-w-100"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AuthLayout;
