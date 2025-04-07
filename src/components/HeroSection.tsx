import React from "react";
import HeroImage from "./HeroImage";
import Heading from "./Heading";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center  ">
      <HeroImage />
      <Heading />
    </div>
  );
};

export default HeroSection;
