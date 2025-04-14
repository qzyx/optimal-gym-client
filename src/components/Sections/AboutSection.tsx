import AboutFirst from "../main/AboutFirst";
import AboutLast from "../main/AboutLast";

const AboutSection = () => {
  return (
    <section id="about" className="relative flex">
      <main className="text-white flex w-full my-10 flex-col items-center gap-10 md:px-10  xl:px-50  ">
        <AboutFirst />
        <AboutLast />
      </main>
    </section>
  );
};

export default AboutSection;
