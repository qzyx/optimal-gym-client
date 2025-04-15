"use client";

import AuthLayout from "@/components/Layout/AuthLayout";
import RegisterForm from "@/components/main/RegisterForm";
import RegisterHeading from "@/components/main/RegisterHeading";

const Page = () => {
  return (
    <AuthLayout pageKey={"register"}>
      <div className="w-full gap-5 p-3 tracking-wide mt-[20vh] bg-white rounded-md flex flex-col">
        <RegisterHeading />
        <RegisterForm />
      </div>
    </AuthLayout>
  );
};

export default Page;
