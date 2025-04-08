import React from "react";
import HeroImage from "./HeroImage";
import Heading from "./Heading";
import JoinSection from "./JoinSection";
import HeroFooter from "./HeroFooter";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen gap-10 flex flex-col items-center  ">
      <HeroImage />
      <Heading />
      <JoinSection />
      <HeroFooter/>
      
    </div>
  );
};

export default HeroSection;
