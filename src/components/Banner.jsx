"use client";

import Image from "next/image";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import { BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import { InlineWidget } from "react-calendly";
import { Abhaya_Libre, Inknut_Antiqua } from "@next/font/google";

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
    <div className="w-11/12 mx-auto">
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

      <div className="text-center  flex justify-start my-14 ">
        <Image
          alt="banner"
          src={banner1}
          width="349"
          height="108"
          className="ml-14   lg:flex hidden "
        ></Image>
        <div classNa me="text-center">
          <button
            className={` bg-[#515151] px-5 ml-[85px]  md:ml-32 mt-14 py-3 text-[16px] md:text-[24px] outline outline-1 outline-slate-400 rounded-md ${inknutAntiqua.className}`}
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            BOOK A CALL
            <BiPhoneCall className="text-3xl font-extralight text-[#bebaba] ml-1 mb-1 inline-block" />
          </button>
        </div>
      </div>

      {/* ui/ux-area */}
      <div className="flex justify-center">
        <Image alt="ui/ux photo" className="w-10/12" src={banner2} />
      </div>

      {/* modal */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-11/12 md:w-10/12 max-w-5xl">
          <InlineWidget
            styles={{
              width: "1000px",
              height: "350px",
            }}
            url="https://calendly.com/monzurulislam997/30min"
          />

          <div className="modal-action">
            <form method="dialog">
              <button className="btn-sm text-black absolute right-4 font-bold text-2xl top-[10px]">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Banner;
