import React from "react";

type Link = {
  name: string;
  url: string;
};

const links = [
  {
    name: "HOME",
    url: "#",
  },
  {
    name: "PRICING",
    url: "#",
  },
  {
    name: "ABOUT",
    url: "#",
  },
  {
    name: "CONTACT",
    url: "#",
  },
];

const NavBar = () => {
  return (
    <div className="fixed top-10 sm:top-5 left-[50%] z-10 text-base -translate-x-[50%] flex px-5 items-center justify-center gap-5 md:text-lg text-white py-3 rounded-md font-bebas bg-black/80 mx-auto">
      {links.map((link: Link, idx) => (
        <a
          href={link.url}
          className="cursor-pointer select-none hover:text-gray-300 transition-all duration-200 ease-in-out"
          key={link.name || idx}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
