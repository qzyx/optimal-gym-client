import AboutFirst from "./AboutFirst";
import AboutLast from "./AboutLast";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex">
      <main className="text-white mx-5  flex w-full my-14 flex-col  gap-5 md:px-60 ">
        <AboutFirst />
        <AboutLast />
      </main>
    </section>
  );
};

export default AboutSection;
