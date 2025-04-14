import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="-z-10 absolute w-full min-h-screen ">
      {/* Image*/}
      <Image src="/hero.jpg" alt="Hero Image" fill className="object-cover" priority ></Image>

      {/* Fade effect*/}
      <div className="absolute bottom-0 w-full h-100 bg-gradient-to-t from-black from-10% to-transparent"></div>
    </div>
  );
};

export default HeroImage;
