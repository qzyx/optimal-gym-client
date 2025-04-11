"use client";

import AuthLayout from "@/app/components/Layout/AuthLayout";
import RegisterForm from "@/app/components/RegisterForm";
import RegisterHeading from "@/app/components/RegisterHeading";

const page = () => {
  return (
    <AuthLayout pageKey={"register"}>
      <div className="max-w-100 min-w-10 gap-5 p-3 tracking-wide mt-[20vh] bg-white w-100 rounded-md flex flex-col">
        <RegisterHeading />
        <RegisterForm />
      </div>
    </AuthLayout>
  );
};

export default page;
