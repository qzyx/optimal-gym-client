import React from "react";

const Heading = () => {
  return (
    <div className="flex flex-col justify-start   text-white mt-[15vh] select-none">
      <span
        style={{
          textShadow: "5px 5px 5px black",
        }}
        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
      >
        NO EXCUSES. JUST RESULTS.
      </span>
      <span
        style={{
          textShadow: "2px 2px 2px black",
        }}
        className="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl "
      >
        Train like a beast. Dominate every rep.
      </span>
    </div>
  );
};

export default Heading;
