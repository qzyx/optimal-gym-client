import AboutSection from "@/app/components/Sections/AboutSection";
import ContactSection from "@/app/components/Sections/ContactSection";
import HeroSection from "@/app/components/Sections/HeroSection";
import PricingSection from "@/app/components/Sections/PricingSection";
import { cookies } from "next/headers";

const page = async () => {
  const cookie = await cookies();
  const session = cookie.get("sessionSecret");
  const user = JSON.parse(session?.value || "{}");
  console.log("User:", user);
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
