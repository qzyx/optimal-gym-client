"use client";

import FadeIn from "@/components/Animations/FadeIn";
import LoginForm from "@/components/LoginForm";
import LoginHeading from "@/components/LoginHeading";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <FadeIn duration={0.5}>
      <div className="flex justify-center items-center select-none  ">
        <div className="max-w-100 min-w-10 gap-5 p-3 tracking-wide mt-[20vh] bg-white w-100 rounded-md flex flex-col">
          <LoginHeading />
          <LoginForm />
          <button className="w-10 h-10 p-4 relative self-center cursor-pointer hover:scale-105 transition-all duration-150">
            <Image alt="google" fill src={"/google.png"}></Image>
          </button>
        </div>
      </div>
    </FadeIn>
  );
};

export default page;
