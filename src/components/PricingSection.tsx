import React from "react";
import PricingCard from "./PricingCard";
interface PricingPlanProps {
  name: string;
  price: string;
  benefits: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlanProps[] = [
  {
    name: "Single Entry (Pay as you go)",
    price: "10$",
    benefits: [
      "✓ Access to main gym area",
      "✓ Standard equipment usage",
      "✓ Locker access",
      "✓ 2 group classes per month",
      "✓ Fitness assessment once every 3 months",
    ],
  },
  {
    name: "Montly membership",
    price: "55$",
    benefits: [
      "★ Full gym access 24/7",
      "★ All equipment usage",
      "★ Personal locker",
      "★ Unlimited group classes",
      "★ Monthly fitness assessment",
      "★ 1 personal training session per month",
      "★ Nutrition consultation",
    ],
    isPopular: true,
  },
  {
    name: "Yearly membership",
    price: "405$",
    benefits: [
      "⭐ VIP gym access 24/7",
      "⭐ Premium equipment priority",
      "⭐ Private locker with towel service",
      "⭐ Unlimited group classes with priority booking",
      "⭐ Bi-weekly fitness assessment",
      "⭐ 4 personal training sessions per month",
      "⭐ Detailed nutrition plan",
      "⭐ Massage therapy session monthly",
      "⭐ Exclusive member events",
    ],
  },
];
const PricingSection = () => {
  return (
    <section id="pricing" className="relative min-h-screen ">
      <main className="text-white flex w-full py-10 flex-col  gap-5 md:px-10   ">
        <span className="self-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600">
          Pricing
        </span>
        <div className="flex w-full gap-5 flex-wrap  justify-around ">
          {pricingPlans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default PricingSection;
