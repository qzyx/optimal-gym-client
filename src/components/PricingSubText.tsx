import React from "react";
import FadeIn from "./Animations/FadeIn";

const PricingSubText = () => {
  return (
    <FadeIn inView={true} y={10}>
      <span className="self-center text-center flex flex-col">
        <span className="text-4xl">Affordable Pricing, Maximum Results</span>
        <span className="text-lg text-gray-300">
          At Optimal Gym, we believe fitness should be accessible to everyone.
          <br />
          Whether you&apos;re just getting started or you&apos;re a seasoned
          pro, we&apos;ve got a membership plan that fits your needs. Choose the
          one that
          <br />
          works best for you and start your journey towards greatness today.
        </span>
      </span>
    </FadeIn>
  );
};

export default PricingSubText;
