import Image from "next/image";
import About from "./component/about";
import Expericnce from "./component/Expericnce";
import Contact from "./component/Contact/Contact";

export default function Home() {
  return (
    <div className='bg-[#1E1E1E]'>
      <About />
      <Expericnce/>
      <Contact/>
    </div>
  );
}
