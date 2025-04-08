import { ArrowRight, LucideIcon } from "lucide-react";

const Button = ({
  size = "md",
  text = "JOIN NOW",
  icon: Icon = ArrowRight,
}: {
  size: "sm" | "md" | "lg";
  text?: string;
  icon?: LucideIcon;
}) => {
  const sizes = {
    sm: "text-lg px-3 py-1",
    md: "text-xl px-6 py-1.5",
    lg: "text-3xl px-8 py-2",
  };

  return (
    <button
      className={` group flex items-center hover:bg-white text-white hover:text-black transition-all relative duration-200 hover:border-black cursor-pointer py-2 border border-white rounded-md tracking-widest text-3xl focus:border-black focus:bg-white focus:text-black ${sizes[size]}`}
    >
      <span className="group-hover:mr-4 transition-all duration-200 group-focus:mr-4">
        {text}
      </span>
      <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 absolute right-4 group-focus:opacity-100 group-focus:translate-x-1">
        <Icon
          size={size === "sm" ? 18 : size === "md" ? 24 : 30}
          className="group-hover:animate-pulse"
        />
      </span>
    </button>
  );
};

export default Button;
