
const Header = () => {
  return (
    <div className="fixed w-full text-white bg-gradient-to-b from-black to-transparent md:text-lg lg:text-xl flex justify-between items-center py-4 md:py-8 px-2 md:px-5">
      <span className="select-none">OPTIMAL GYM</span>
      <button className="cursor-pointer hover:text-gray-300 transition-all duration-200 ease-in-out">
        LOGIN/REGISTER
      </button>
    </div>
  );
};

export default Header;
