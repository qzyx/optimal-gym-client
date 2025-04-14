import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import HeroSection from "@/components/Sections/HeroSection";
import PricingSection from "@/components/Sections/PricingSection";
import getUserFromCookies from "@/utils/getUserFromCookies";

const page = async () => {
  const user = await getUserFromCookies();
  console.log(user);
  return (
    <div className="flex flex-col gap-10">
      <HeroSection user={user} />
      <PricingSection user={user} />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default page;
