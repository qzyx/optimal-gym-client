import { MoveDown } from "lucide-react";

const BouncingArrow = () => {
  return (
    <div className="md:absolute hidden bottom-25 md:bottom-5  text-white animate-bounce">
      <MoveDown size={32}></MoveDown>
    </div>
  );
};

export default BouncingArrow;
