import AboutHeading from "./AboutHeading";
import AboutMessage from "./AboutMessage";
import AboutPoints from "./AboutPoints";

const AboutFirst = () => {
  return (
    <div className="text-xl text-gray-300 md:flex-1 w-full flex flex-col items-center gap-8">
      <AboutHeading />
      <div className="flex flex-col gap-4 px-2 sm:px-4   md:px-10  xl:px-50 overflow-x-hidden ">
        <AboutMessage />
        <AboutPoints />
      </div>
    </div>
  );
};

export default AboutFirst;
