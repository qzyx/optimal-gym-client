import Heading from "../HeroHeading";
import HeroFooter from "../HeroFooter";
import HeroImage from "../HeroImage";
import JoinSection from "../JoinSection";
import BouncingArrow from "../UI/BouncingArrow";
import { UserSession } from "@/types/UserSession";

const HeroSection = ({ user }: { user: UserSession }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen gap-10 flex flex-col items-center select-none  "
    >
      <HeroImage />
      <Heading />
      <JoinSection user={user} />
      <HeroFooter />
      <BouncingArrow />
    </section>
  );
};

export default HeroSection;
