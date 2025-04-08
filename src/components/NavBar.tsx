import { HandCoins, House, Info, Phone } from "lucide-react";
import React from "react";

type Link = {
  name: string;
  url: string;
  icon?: React.ReactNode;
};

const links = [
  {
    name: "HOME",
    url: "#",
    icon: <House></House>,
  },
  {
    name: "PRICING",
    url: "#",
    icon: <HandCoins></HandCoins>,
  },
  {
    name: "ABOUT",
    url: "#",
    icon: <Info></Info>,
  },
  {
    name: "CONTACT",
    url: "#",
    icon: <Phone></Phone>,
  },
];

const NavBar = () => {
  return (
    <>
      <div className="hidden md:flex top-10 sm:top-5 left-[50%] z-10 text-base -translate-x-[50%] fixed px-5 items-center justify-center gap-5 md:text-lg text-white py-3 rounded-md font-bebas bg-black/80 mx-auto">
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
      <div className="fixed bottom-0 w-full  md:hidden flex justify-center ">
        <div className=" flex items-center  gap-4 mb-2 w-full justify-around py-2 ">
          {links.map((link: Link, idx) => (
            <a
              className="text-white text-xl flex flex-col items-center"
              href={link.url}
              key={link.name || idx}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
