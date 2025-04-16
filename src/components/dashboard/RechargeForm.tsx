import React from "react";
import { motion } from "framer-motion";
import { crownColors } from "../../../public/crowsColors";
import { Crown, X } from "lucide-react";
import { pricingPlans } from "../../../public/pricingPlans";
import { buyMembership } from "@/lib/appwrite";
import { UserDataFromDatabase } from "@/types/UserDataFromDatabase";
const RechargeForm = ({
  setOpen,
  user,
}: {
  setOpen: (value: boolean) => void;
  user: UserDataFromDatabase;
}) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="absolute bg-gradient-to-b max-w-100 left-[50%] -translate-x-[50%]  from-purple-800/60 via-purple-900 to-purple-800/60 w-full p-2 rounded-md bottom-[200%] shadow-lg shadow-slate-900"
    >
      <span className="flex justify-between">
        <span>Recharge</span>
        <button
          className="cursor-pointer hover:scale-105 transition-all duration-200"
          onClick={() => setOpen(false)}
        >
          <X size={20}></X>
        </button>
      </span>
      <div className="flex flex-col gap-1">
        {pricingPlans.map((plan, idx) => (
          <div key={idx} className="flex flex-col ">
            <div className="flex justify-center items-center flex-col py-1 tracking-widest">
              <Crown color={crownColors[plan.id]}></Crown>
              {plan.id}
            </div>
            <div className="flex gap-2 ">
              <span className="flex-1 text-green-400 flex justify-center items-center bg-gradient-to-br w-full from-black/90 via-black/20 to-black/90 transition-all duration-200  bg-[length:200%_200%] bg-[position:5%_50%]  py-2 rounded-md shadow-xl hover:bg-[position:100%_50%] ease-in-out">
                {plan.price}
              </span>
              <button
                onClick={async () => {
                  await buyMembership(plan.id, new Date(), user.$id, plan.days);
                }}
                className="flex-1 cursor-pointer bg-gradient-to-br w-full from-green-950 via-green-500 to-green-200 transition-all duration-200 text-white bg-[length:200%_200%] bg-[position:5%_50%] hover:tracking-widest py-2 rounded-md shadow-xl hover:bg-[position:100%_50%] ease-in-out"
              >
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RechargeForm;
