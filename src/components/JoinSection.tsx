import React from "react";
import JoinButton from "./UI/JoinButton";

const JoinSection = () => {
  return (
    <section className="px-10 py-5 text-white rounded-md items-center flex flex-col gap-4 bg-black/60">
      <span className="flex flex-col ">
        <span className="text-2xl ">
          JOIN US. BECOME AESTHETIC. BECOME A GOD.
        </span>
        <span className="text-center text-gray-300">
          It’s not about being better than others, it’s about being <br></br>
          better than you were yesterday.
        </span>
      </span>
      <span className="flex flex-col gap-1 items-center">
        <span className="text-2xl">READY TO ASCEND?</span>
        <JoinButton  size="lg"/>
      </span>
    </section>
  );
};

export default JoinSection;
