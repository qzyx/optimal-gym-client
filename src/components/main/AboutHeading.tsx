import React from "react";
import FadeIn from "../Animations/FadeIn";

const AboutHeading = () => {
  return (
    <FadeIn inView={true} y={10}>
      <span className="tracking-widest text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600">
        About optimal gym
      </span>
    </FadeIn>
  );
};

export default AboutHeading;
