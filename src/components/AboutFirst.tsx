import { Clock, Dumbbell, MessageSquare, UserCheck, Zap } from "lucide-react";
import AboutHeading from "./AboutHeading";

const AboutFirst = () => {
  return (
    <div className="text-xl text-gray-300 md:flex-1 w-full flex flex-col items-center gap-8">
      <AboutHeading />
      <div className="flex flex-col gap-4">
        <div className="w-full backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-md p-5 shadow-xl flex gap-2">
          <span>
            <MessageSquare></MessageSquare>
          </span>
          <span>
            At Optimal Gym, we&apos;re all about pushing limits and unlocking
            potential. Whether you&apos;re a beginner or a pro, we provide the
            perfect space to grow stronger—physically and mentally.
          </span>
        </div>
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
      </div>
    </div>
  );
};

export default AboutFirst;
