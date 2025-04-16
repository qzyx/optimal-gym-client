"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import RechargeForm from "./RechargeForm";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
const UserRechargeSection = ({ user }: { user: UserDataFromDatabase }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative ">
      <AnimatePresence>
        {open && <RechargeForm user={user} setOpen={setOpen} />}
      </AnimatePresence>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-5 z-10 py-2 bg-gradient-to-br w-full from-green-950 via-green-500 to-green-200 rounded-md cursor-pointer transition-all duration-200 text-white bg-[length:200%_200%] bg-[position:5%_50%] hover:tracking-widest  hover:bg-[position:100%_50%] ease-in-out "
      >
        {open ? "CLOSE" : "RECHARGE"}
      </button>
    </div>
  );
};

export default UserRechargeSection;
