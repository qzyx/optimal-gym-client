/**
 * NavBar Component
 *
 * A responsive navigation component with two different layouts:
 * - Desktop: A fixed navbar at the top of the page with text links
 * - Mobile: A fixed navbar at the bottom of the page with icon and text links
 *
 * Features:
 * - Intersection Observer API to highlight the active section
 * - Smooth transitions and hover effects
 * - Responsive design that changes layout based on screen size
 * - Custom underline animations for active and hovered links
 *
 * The mobile version displays at the bottom of the screen with icons and text,
 * while the desktop version displays at the top with text-only links.
 */

"use client";

import { HandCoins, House, Info, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";

type LinkType = {
  name: string;
  url: string;
  icon?: React.ReactNode;
};

const links: LinkType[] = [
  {
    name: "HOME",
    url: "home",
    icon: <House></House>,
  },
  {
    name: "PRICING",
    url: "pricing",
    icon: <HandCoins></HandCoins>,
  },
  {
    name: "ABOUT",
    url: "about",
    icon: <Info></Info>,
  },
  {
    name: "CONTACT",
    url: "contact",
    icon: <Phone></Phone>,
  },
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    links.forEach((link: LinkType) => {
      const element = document.getElementById(link.url);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      setActiveSection(null);
    };
  }, []);

  return (
    <>
      <nav className="hidden md:flex top-10 sm:top-5 left-[50%] z-10 text-base -translate-x-[50%] fixed px-5 items-center justify-center gap-5 md:text-lg text-white py-3 rounded-md font-bebas bg-black/80 mx-auto">
        {links.map((link: LinkType, idx) => (
          <a
            href={`/#${link.url}`}
            className={`cursor-pointer select-none relative hover:tracking-wider hover:text-gray-300 transition-all duration-200 ease-in-out ${
              activeSection === link.url
                ? "after:content-[''] after:h-[2px]  after:absolute after:bottom-0 after:left-[50%] after:bg-white after:transition-all after:duration-300 after:ease-in-out after:translate-x-[-50%] after:w-full"
                : "after:content-[''] after:h-[2px] after:w-0 after:absolute after:bottom-0 after:left-[50%] after:bg-white/70 after:transition-all after:duration-300 after:hover:w-full after:ease-in-out after:translate-x-[-50%]"
            } `}
            key={link.name || idx}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <nav className="fixed bottom-0 w-full  md:hidden flex justify-center bg-black/50 text-white p-1  font-bebas text-lg z-10">
        <div className=" flex items-center  gap-4  w-full justify-evenly p-1 ">
          {links.map((link: LinkType, idx) => (
            <a
              href={`#${link.url}`}
              className={`text-white text-xl flex flex-col items-center cursor-pointer flex-1 py-1 transition-all duration-300 ${
                activeSection === link.url
                  ? "bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full shadow-lg shadow-blue-500/30 scale-105"
                  : "hover:bg-black/30 hover:rounded-full"
              }`}
              key={link.name || idx}
            >
              <span
                className={
                  activeSection === link.url ? "text-white animate-pulse" : ""
                }
              >
                {link.icon}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
