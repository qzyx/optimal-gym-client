import React from "react";
import FadeIn from "../Animations/FadeIn";

const EquipmentSubText = () => {
  return (
    <FadeIn inView={true} delayTime={0.5}>
      <div className="text-center ">
        <span className="bg-gradient-to-r from-white/50 via-white/70 to-white/40 bg-clip-text text-transparent backdrop-blur-md">
          &quot;Built for those who demand the best. Our gym is fully stocked
          <br />
          with Hammer Strength and Panatta equipment—machines designed for pure
          <br />
          strength, precision, and performance. Whether you&apos;re pushing
          <br />
          heavy on plate-loaded presses or chasing the perfect contraction on
          <br />
          Panatta isolaterals, we&apos;ve got the tools to fuel your progress.
          <br />
          No compromises, just results.&quot;
        </span>
      </div>
    </FadeIn>
  );
};

export default EquipmentSubText;
