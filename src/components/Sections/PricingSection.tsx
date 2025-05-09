import React from "react";
import PricingCard from "../main/PricingCard";
import PricingHeading from "../main/PricingHeading";
import PricingSubText from "../main/PricingSubText";
import { pricingPlans } from "../../../public/pricingPlans";
import { UserSession } from "@/types/UserSession";

const PricingSection = ({ user }: { user: UserSession }) => {
  return (
    <section id="pricing" className="relative  ">
      <main className="text-white flex w-full flex-col  gap-2 md:px-10   ">
        <PricingHeading />
        <div className="flex w-full gap-5 flex-wrap  justify-around overflow-hidden py-5 md:py-10 ">
          {pricingPlans.map((plan, idx) => (
            <PricingCard user={user} key={idx} plan={plan} />
          ))}
        </div>
        <PricingSubText />
      </main>
    </section>
  );
};

export default PricingSection;
