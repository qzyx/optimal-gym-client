import AboutFirst from "./AboutFirst";
import AboutLast from "./AboutLast";

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex">
      <main className="text-white flex w-full my-10 flex-col  gap-5 md:px-10  xl:px-50  ">
        <AboutFirst />
        <AboutLast />
      </main>
    </section>
  );
};

export default AboutSection;
