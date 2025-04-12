"use client";

import AboutSection from "@/app/components/Sections/AboutSection";
import ContactSection from "@/app/components/Sections/ContactSection";
import HeroSection from "@/app/components/Sections/HeroSection";
import PricingSection from "@/app/components/Sections/PricingSection";
import { useSession } from "@/lib/sessionContext";

const page = () => {
  const { user } = useSession();
  console.log(user);
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default page;
