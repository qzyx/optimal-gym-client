import Heading from "../main/HeroHeading";
import HeroFooter from "../main/HeroFooter";
import HeroImage from "../main/HeroImage";
import JoinSection from "../main/JoinSection";
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
