import React from "react";
import FadeIn from "./Animations/FadeIn";

const PricingHeading = () => {
  return (
    <FadeIn
      inView={true}
      y={10}
      classname={
        "self-center tracking-widest text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600"
      }
    >
      <span>Pricing</span>
    </FadeIn>
  );
};

export default PricingHeading;
