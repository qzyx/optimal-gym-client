import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <HeroSection />
      <div className="min-h-screen bg-black"></div>
    </div>
  );
};

export default page;
