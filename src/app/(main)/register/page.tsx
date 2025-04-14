"use client";

import AuthLayout from "@/components/Layout/AuthLayout";
import RegisterForm from "@/components/main/RegisterForm";
import RegisterHeading from "@/components/main/RegisterHeading";

const Page = () => {
  return (
    <AuthLayout pageKey={"register"}>
      <div className="max-w-100 min-w-10 gap-5 p-3 tracking-wide mt-[20vh] bg-white w-100 rounded-md flex flex-col">
        <RegisterHeading />
        <RegisterForm />
      </div>
    </AuthLayout>
  );
};

export default Page;
