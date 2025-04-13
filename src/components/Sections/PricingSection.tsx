import React from "react";
import PricingCard from "../PricingCard";
import PricingHeading from "../PricingHeading";
import PricingSubText from "../PricingSubText";
import { pricingPlans } from "../../../public/pricingPlans";

const PricingSection = () => {
  return (
    <section id="pricing" className="relative  ">
      <main className="text-white flex w-full flex-col  gap-2 md:px-10   ">
        <PricingHeading />
        <div className="flex w-full gap-5 flex-wrap  justify-around overflow-hidden py-5 md:py-10 ">
          {pricingPlans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
        <PricingSubText />
      </main>
    </section>
  );
};

export default PricingSection;
