import Image from "next/image";
import React from "react";
import FadeIn from "../Animations/FadeIn";

const Pannata = () => {
  return (
    <FadeIn x={50} inView={true}>
      <span className="flex   flex-col items-center md:block gap-2">
        <Image
          className="float-left "
          alt="panatta"
          width={300}
          height={300}
          src={"/panatta.png"}
        ></Image>
      </span>
    </FadeIn>
  );
};

export default Pannata;
