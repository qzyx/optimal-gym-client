"use client";

import AboutSection from "@/app/components/Sections/AboutSection";
import ContactSection from "@/app/components/Sections/ContactSection";
import HeroSection from "@/app/components/Sections/HeroSection";
import PricingSection from "@/app/components/Sections/PricingSection";

const page = () => {
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
