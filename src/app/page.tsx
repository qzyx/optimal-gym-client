import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <PricingSection />
      <AboutSection />
    </div>
  );
};

export default page;
