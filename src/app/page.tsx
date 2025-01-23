import Hottest from "@/components/Home/Hottest";
import LearnMore from "@/components/Home/LearnMore";
import Hero from "@/components/Shared/Banner";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

export default function Home() {
  return (
    <div className="p-4 md:p-0">
      <Header />
      <Hero />
      <Hottest />

      <LearnMore />
      <Footer />
    </div>
  );
}
