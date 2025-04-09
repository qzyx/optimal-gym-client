import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import HeroSection from "@/components/Sections/HeroSection";
import PricingSection from "@/components/Sections/PricingSection";

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
