import React from "react";
import HeroImage from "./HeroImage";
import Heading from "./Heading";
import JoinSection from "./JoinSection";
import HeroFooter from "./HeroFooter";
import BouncingArrow from "./UI/BouncingArrow";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gap-10 flex flex-col items-center  ">
      <HeroImage />
      <Heading />
      <JoinSection />
      <HeroFooter />
      <BouncingArrow />
    </section>
  );
};

export default HeroSection;
