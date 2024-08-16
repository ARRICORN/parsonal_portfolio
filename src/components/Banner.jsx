"use client";

import Image from "next/image";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import stroke from "@/assets/stroke.png";
import { BiPhoneCall } from "react-icons/bi";
import { InlineWidget, PopupButton } from "react-calendly";
import { Abhaya_Libre, Inknut_Antiqua } from "@next/font/google";
import { motion } from "framer-motion";
import { fadeInDown } from "@/app/component/Framer-Motion/Animation";
// Abhaya Libre Font
const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const Banner = () => {
  return (
    <motion.div variants={fadeInDown} initial="hidden" animate="visible">
      <div className="w-11/12 mx-auto relative">
        <Image
          alt=""
          className="absolute  left-0 w-1/4 top-10"
          src={stroke}
        ></Image>
        <div
          className={`text-center  pt-12 md:pt-20 relative text-[30px] md:text-[56px]  ${abhayaLibre.className}`}
        >
          <h1 className="">
            Good design is obvious. <br /> Great design is transparent.
          </h1>
          <p className="text-center text-[24px] md:text-[48px] absolute right-10 md:right-96">
            - Joe Sparano
          </p>
        </div>

        <div className="text-center flex justify-start items-center my-14">
          <Image
            alt="banner"
            src={banner1}
            width="349"
            height="108"
            className="ml-14 lg:flex hidden"
          />

          <div
            className={`flex justify-center items-center border border-white p-2 ml-16 md:ml-20 rounded-lg px-8 transition-all duration-300 ease-linear hover:scale-[1.1] hover:text-opacity-85 ${inknutAntiqua.className}`}
          >
            <PopupButton
              url="https://calendly.com/monzurulislam997/30min"
              className="rounded-2xl   bg-transparent  py-2 uppercase text-white  inline-block "
              rootElement={
                typeof document !== "undefined" ? document.body : undefined
              }
              text="Book A Schedule"
            />
            <BiPhoneCall className="text-3xl font-extralight text-[#bebaba] ml-1 mb-1 inline-block   p-1 rounded-full" />
          </div>
        </div>

        {/* ui/ux-area */}
        <div className="flex justify-center">
          <Image alt="ui/ux photo" className="w-10/12" src={banner2} />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
