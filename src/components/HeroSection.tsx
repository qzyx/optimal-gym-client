import Heading from "./Heading";
import HeroFooter from "./HeroFooter";
import HeroImage from "./HeroImage";
import JoinSection from "./JoinSection";
import BouncingArrow from "./UI/BouncingArrow";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen gap-10 flex flex-col items-center select-none  "
    >
      <HeroImage />
      <Heading />
      <JoinSection />
      <HeroFooter />
      <BouncingArrow />
    </section>
  );
};

export default HeroSection;
