import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#1E1E1E] text-white">
      <Navbar />
      <Banner />
      <Work />
    </main>
  );
}
