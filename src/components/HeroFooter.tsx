import { Check } from "lucide-react";
import React from "react";

const HeroFooter = () => {
  return (
    <div className="absolute bottom-0 w-full text-gray-300 md:text-lg lg:text-xl flex justify-between items-end py-8 px-2 md:px-5 ">
      <span className="flex flex-col items-start">
        <span className="flex">
          <span className="text-green-500 mr-1">
            <Check></Check>
          </span>
          <span>Trusted by 500+ members</span>
        </span>
        <span className="flex">
          <span className="text-green-500 mr-1">
            <Check></Check>
          </span>
          <span>Open 24/7</span>
        </span>
      </span>
      <span className="text-end">
        {" "}
        Optimal Gym <br />
        123 Iron Avenue,Fitness <br /> City, FTM 4593
      </span>
    </div>
  );
};

export default HeroFooter;
