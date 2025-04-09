import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";

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
