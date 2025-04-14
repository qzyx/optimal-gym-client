"use client";

import AuthLayout from "@/components/Layout/AuthLayout";
import LoginForm from "@/components/main/LoginForm";
import LoginHeading from "@/components/main/LoginHeading";
import Image from "next/image";

const Page = () => {
  return (
    <AuthLayout pageKey={"login"}>
      <div className="max-w-100 min-w-10 gap-5 p-3 tracking-wide mt-[20vh] bg-white w-100 rounded-md flex flex-col">
        <LoginHeading />
        <LoginForm />
        <button className="w-10 h-10 p-4 relative self-center cursor-pointer hover:scale-105 transition-all duration-150">
          <Image alt="google" fill src={"/google.png"}></Image>
        </button>
      </div>
    </AuthLayout>
  );
};

export default Page;
