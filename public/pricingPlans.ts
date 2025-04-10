export interface PricingPlanProps {
  id: string;
  name: string;
  price: string;
  position: string;
  benefits: string[];
  isPopular?: boolean;
}

export const pricingPlans: PricingPlanProps[] = [
  {
    id: "single",
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
    id: "month",
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
    id: "year",
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
