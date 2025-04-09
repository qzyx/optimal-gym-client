"use client";

import FadeIn from "@/components/Animations/FadeIn";
import RegisterForm from "@/components/RegisterForm";
import RegisterHeading from "@/components/RegisterHeading";

const page = () => {
  return (
    <FadeIn duration={0.5}>
      <div className="flex justify-center items-center select-none  ">
        <div className="max-w-100 min-w-10 gap-5 p-3 tracking-wide mt-[20vh] bg-white w-100 rounded-md flex flex-col">
          <RegisterHeading />
          <RegisterForm />
        </div>
      </div>
    </FadeIn>
  );
};

export default page;
