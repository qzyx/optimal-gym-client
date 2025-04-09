import { MessageSquare } from "lucide-react";
import React from "react";
import FadeIn from "./Animations/FadeIn";

const AboutMessage = () => {
  return (
    <FadeIn inView={true} x={-50}>
      <div className="w-full  backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-md p-5 shadow-xl flex gap-2">
        <span>
          <MessageSquare></MessageSquare>
        </span>
        <span>
          At Optimal Gym, we&apos;re all about pushing limits and unlocking
          potential. Whether you&apos;re a beginner or a pro, we provide the
          perfect space to grow stronger—physically and mentally.
        </span>
      </div>
    </FadeIn>
  );
};

export default AboutMessage;
