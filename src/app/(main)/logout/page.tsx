"use client";

import AuthLayout from "@/components/Layout/AuthLayout";
import LogoutHeading from "@/components/main/LogoutHeading";
import { handleSubmitLogout } from "@/lib/appwrite";
import { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const handleLogout = async () => {
      try {
        setIsLoading(true);
        await handleSubmitLogout();
        setIsLoading(false);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        window.location.href = "/";
      } catch (error) {
        console.error("Error during logout:", error);
        setError("Logout failed. Please try again.");
        setIsLoading(false);
      }
    };
    handleLogout();
  }, []);

  return (
    <AuthLayout pageKey="logout">
      <div className="max-w-100 min-w-10 gap-5 p-3 flex flex-col items-center tracking-wide mt-[20vh] bg-white w-100 rounded-md ">
        <LogoutHeading />
        {isLoading ? (
          <div className="h-15 w-15 rounded-full border-t-1 my-20 animate-spin"></div>
        ) : !error ? (
          <>
            <div className="h-15 w-15 rounded-full border-t-1 my-20 animate-spin"></div>
            <p>Logout complete. Redirecting...</p>
          </>
        ) : (
          <span className="text-red-500">Error during login</span>
        )}
      </div>
    </AuthLayout>
  );
};

export default Page;
