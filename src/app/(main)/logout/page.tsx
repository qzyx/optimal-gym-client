import AuthLayout from "@/components/Layout/AuthLayout";
import LoginForm from "@/components/LoginForm";
import LoginHeading from "@/components/LoginHeading";
import Image from "next/image";
import React from "react";

const logout = () => {
  return (
    <AuthLayout pageKey="logout">
      <div className="max-w-100 min-w-10 gap-5 p-3 tracking-wide mt-[20vh] bg-white w-100 rounded-md flex flex-col">
        <LoginHeading />
        <LoginForm />
        <button className="w-10 h-10 p-4 relative self-center cursor-pointer hover:scale-105 transition-all duration-150">
          <Image alt="google" fill src={"/google.png"}></Image>
        </button>
      </div>
      \
    </AuthLayout>
  );
};

export default logout;
