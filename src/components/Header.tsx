import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="fixed w-full text-white flex justify-between items-center py-5 px-5">
      <span className="select-none">OPTIMAL GYM</span>
      <button className="cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">
        LOGIN/REGISTER
      </button>
    </div>
  );
};

export default Header;
