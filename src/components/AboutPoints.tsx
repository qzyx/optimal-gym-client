import { Clock, Dumbbell, UserCheck, Zap } from "lucide-react";
import React from "react";
import FadeIn from "./Animations/FadeIn";

const AboutPoints = () => {
  return (
    <FadeIn inView={true} x={50}>
      <div className="w-full backdrop-blur-md text-sm  text-center  bg-gradient-to-br justify-evenly from-white/10 to-white/5 border border-white/20 rounded-md p-5 shadow-xl flex ">
        <span className="flex gap-2 flex-col md:flex-row items-center flex-1">
          <Dumbbell></Dumbbell>Elite EQUIPMENT
        </span>
        <span className="flex gap-2 flex-col md:flex-row items-center flex-1">
          <Clock></Clock>24/7 Access
        </span>
        <span className="flex gap-2 flex-col md:flex-row items-center flex-1">
          <Zap />
          Next-Level Atmosphere
        </span>
        <span className="flex gap-2 flex-col md:flex-row items-center flex-1">
          <UserCheck />
          Personalized Training
        </span>
      </div>
    </FadeIn>
  );
};

export default AboutPoints;
