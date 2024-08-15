import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import About from "./component/about";
import Expericnce from "./component/Expericnce";
import Contact from "./component/Contact/Contact";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#1E1E1E] text-white">
      <Navbar />
      <Banner />
      <Work />
      <About />
      <Expericnce />
      <Contact />
    </main>
  );
}
