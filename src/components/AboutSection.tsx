import React from "react";
import SectionHeading from "./UI/SectionHeading";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative  min-h-screen flex">
      <SectionHeading>About</SectionHeading>
      <main className="text-white mx-5 my-14 flex flex-col gap-5 items-start ">
        <span className="text-xl">
          {" "}
          Welcome to Optimal Gym—where strength, discipline, and results come
          together. We’re here to help you push your limits, crush your goals,
          and become the best version of yourself.
        </span>
        <div className="self-center flex flex-col gap-5">
          <span className="tracking-widest text-7xl ">EQUIPMENT</span>
          <div>
            <Image
              alt="hammer-strength"
              fill
              src={"/hammer-strength.png"}
            ></Image>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutSection;
