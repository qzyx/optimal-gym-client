"use client";

import React from "react";
import Button from "../UI/Button";
import { motion } from "framer-motion";
import { Ticket } from "lucide-react";
import Link from "next/link";
import { UserSession } from "@/types/UserSession";
type Plan = {
  name: string;
  price: string;
  position: string;
  benefits: string[];
  isPopular?: boolean;
};
const PricingCard = ({ plan, user }: { plan: Plan; user: UserSession }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x:
          plan.position === "left" ? -100 : plan.position === "right" ? 100 : 0,
      }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      transition={{ ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`${
        plan.isPopular ? "border-2 border-yellow-500 " : ""
      } p-5 pb-20 flex flex-col  items-center relative  rounded-md w-100 bg-gradient-to-b from-black border border-gray-600 to-pink-800`}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 -right-3 bg-yellow-500  font-bold py-1 px-3 rounded-full transform rotate-12 shadow-lg text-sm">
          <p className="bg-clip-text bg-gradient-to-r from-black to-pink-800 text-transparent">
            Most Popular
          </p>
        </div>
      )}

      <span className="text-white text-center text-3xl">{plan.name}</span>
      <span className="text-xl">{plan.price}</span>
      <span className="self-start text-2xl mt-5">BENEFITS</span>
      <div className="flex flex-col gap-2 self-start text-lg mt-5">
        {plan.benefits.map((benefit, idx) => (
          <span key={idx}>{benefit}</span>
        ))}
      </div>
      <Link href={user ? "/dashboard" : "/login"} className="absolute bottom-5">
        <Button size="md" text="BUY NOW" icon={Ticket} />
      </Link>
    </motion.div>
  );
};

export default PricingCard;
