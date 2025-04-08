import Image from "next/image";
import EuquipmentHeading from "./EquipmentHeading";

const AboutLast = () => {
  return (
    <div className="self-center md:self-start w-full flex flex-col items-center gap-8 md:flex-1">
      <EuquipmentHeading />
      <div className="flex flex-col md:flex-row md:justify-evenly gap-15 w-full">
        <span className="flex  flex-col items-center  md:block gap-2">
          <Image
            className="float-left"
            alt="hammer-strength"
            width={300}
            height={300}
            objectFit="cover"
            src={"/hammer-strength.png"}
          ></Image>
        </span>
        <span className="flex   flex-col items-center md:block gap-2">
          <Image
            className="float-left"
            alt="panatta"
            width={300}
            height={300}
            objectFit="cover"
            src={"/panatta.png"}
          ></Image>
        </span>
      </div>
      <div className="text-center ">
        <span className="">
          &quot;Built for those who demand the best. Our gym is fully stocked
          <br />
          with Hammer Strength and Panatta equipment—machines designed for pure
          <br />
          strength, precision, and performance. Whether you&apos;re pushing
          <br />
          heavy on plate-loaded presses or chasing the perfect contraction on
          <br />
          Panatta isolaterals, we&apos;ve got the tools to fuel your progress.
          <br />
          No compromises, just results.&quot;
        </span>
      </div>
    </div>
  );
};

export default AboutLast;
