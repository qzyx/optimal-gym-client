import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

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
