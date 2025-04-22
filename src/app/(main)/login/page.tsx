"use client";

import AuthLayout from "@/components/Layout/AuthLayout";
import LoginForm from "@/components/main/LoginForm";
import LoginHeading from "@/components/main/LoginHeading";
import Image from "next/image";

const Page = () => {
  return (
    <AuthLayout pageKey={"login"}>
      <div className="w-full gap-5 p-3 tracking-wide mt-[20vh] bg-white  rounded-md flex flex-col">
        <LoginHeading />
        <LoginForm />
      </div>
    </AuthLayout>
  );
};

export default Page;
