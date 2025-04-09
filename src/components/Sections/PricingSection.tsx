import React from "react";
import PricingCard from "../PricingCard";
import PricingHeading from "../PricingHeading";
interface PricingPlanProps {
  name: string;
  price: string;
  position: string;
  benefits: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlanProps[] = [
  {
    name: "Single Entry (Pay as you go)",
    price: "10$",
    position: "left",
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
    position: "middle",
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
    position: "right",
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
    <section id="pricing" className="relative  ">
      <main className="text-white flex w-full flex-col  gap-5 md:px-10   ">
        <PricingHeading />
        <div className="flex w-full gap-5 flex-wrap  justify-around  ">
          {pricingPlans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
        <span className="self-center text-center flex flex-col">
          <span className="text-4xl">Affordable Pricing, Maximum Results</span>
          <span className="text-lg text-gray-300">
            At Optimal Gym, we believe fitness should be accessible to everyone.
            <br />
            Whether you&apos;re just getting started or you&apos;re a seasoned
            pro, we&apos;ve got a membership plan that fits your needs. Choose
            the one that
            <br />
            works best for you and start your journey towards greatness today.
          </span>
        </span>
      </main>
    </section>
  );
};

export default PricingSection;
