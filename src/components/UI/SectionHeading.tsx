import React from "react";

const SectionHeading = ({ children }: { children: string }) => {
  return <span className="text-white absolute top-5 left-5 text-xl sm:text-2xl lg:text-3xl tracking-widest">{children}</span>;
};

export default SectionHeading;
