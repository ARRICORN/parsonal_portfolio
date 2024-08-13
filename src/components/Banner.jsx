"use client";

import Image from "next/image";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import { BiSolidPhoneCall } from "react-icons/bi";

import { InlineWidget, PopupWidget } from "react-calendly";
const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center  pt-12 md:pt-20 relative   text-3xl">
        <h1 className="">
          Good design is obvious. <br /> Great design is transparent.
        </h1>
        <p className="text-center text-base absolute right-96">- Joe Sparano</p>
      </div>

      <Image
        alt="banner"
        src={banner1}
        className="ml-10 lg:flex hidden mt-6"
      ></Image>
      <div className="text-center pt-3 pb-10">
        <button
          className=" bg-slate-800 px-5 py-3 outline outline-1 outline-slate-400 rounded-md"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          BOOK A CALL
          <BiSolidPhoneCall className="text-3xl font-extralight ml-1 inline-block" />
        </button>
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
