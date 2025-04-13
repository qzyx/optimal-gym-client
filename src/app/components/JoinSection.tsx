import Link from "next/link";
import FadeIn from "./Animations/FadeIn";
import Button from "./UI/Button";

const JoinSection = () => {
  return (
    <FadeIn delayTime={0.2} x={-10}>
      <div className="px-10 py-5 text-white rounded-md items-center flex flex-col gap-4 bg-black/60">
        <span className="flex flex-col ">
          <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-600 ">
            JOIN US. BECOME AESTHETIC. BECOME A GOD.
          </span>
          <span className="text-center text-gray-300">
            It&apos;s not about being better than others, it’s about being{" "}
            <br></br>
            better than you were yesterday.
          </span>
        </span>
        <span className="flex flex-col gap-1 items-center">
          <span className="text-2xl">READY TO ASCEND?</span>
          <Link href="/login">
            <Button size="lg" />
          </Link>
        </span>
      </div>
    </FadeIn>
  );
};

export default JoinSection;
