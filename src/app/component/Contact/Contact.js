import React from "react";
import { Inknut_Antiqua } from "@next/font/google";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";
import { GoPaperAirplane } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import "./Contact.css";
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify other weights if needed
  display: "swap", // Optional: Improves font loading behavior
});

const Contact = () => {
  return (
    <>
      <footer id="contact" className="max-w-[1400px] m-auto px-5">
        <div className={inknutAntiqua.className}>
          {" "}
          <p className="text-5xl line pt-12 text-white pb-12">Let’s Connect</p>
        </div>
        <div>
          <p className="text-2xl font-normal text-[#C1C1C1] tracking-widest">
            Let me help you become even greater at what you do.
            <br />
            Fill out the form and I will get back to you in 24 hours.
          </p>
        </div>
        {/* from */}
        <div>
          <div className="grid md:grid-cols-2  sm:grid-cols-1 md:gap-24 ">
            <div className="py-4">
              <div className="py-4">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 flex items-center justify-center border-[1px] border-white rounded-full text-white text-lg">
                    1
                  </div>
                  <label class="text-white text-[22px] mb-2 mt-2">
                    What’s Your Name?
                  </label>
                </div>
                <input
                  className=" mb-3 p-3 text-white text-[18px]   w-full  bg-[#1E1E1E]"
                  placeholder="Type your full name"
                  type="text"
                />
              </div>
              <div className="py-4">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 flex items-center justify-center border-[1px] border-white rounded-full text-white text-lg">
                    2
                  </div>
                  <label class="text-white text-[22px] mb-2 mt-2">
                    Your Email Address?
                  </label>
                </div>
                <input
                  className=" mb-3 p-3 text-white text-[18px]   w-full  bg-[#1E1E1E]"
                  placeholder="example@email.com"
                  type="text"
                />{" "}
              </div>
              <div className="py-4">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 flex items-center justify-center border-[1px] border-white rounded-full text-white text-lg">
                    3
                  </div>
                  <label class="text-white text-[22px] mb-2 mt-2">
                    Your Phone Number?
                  </label>
                </div>
                <input
                  className=" mb-3 p-3 text-white text-[18px]   w-full  bg-[#1E1E1E]"
                  placeholder="+11 222 3333 44444"
                  type="text"
                />{" "}
              </div>
              <div className="py-4">
                {" "}
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 flex items-center justify-center border-[1px] border-white rounded-full text-white text-lg">
                    4
                  </div>
                  <label class="text-white text-[22px] mb-2 mt-2">
                    Tell Me About Your Project?
                  </label>
                </div>
                <input
                  className=" mb-3 p-3 text-white text-[18px]   w-full  bg-[#1E1E1E]"
                  placeholder="Write something about your project..........."
                  type="text"
                />{" "}
              </div>
              <div className={inknutAntiqua.className}>
                {" "}
                <button
                  type="button"
                  className=" text-white    font-medium rounded-[25px]  border text-sm px-5 py-3 me-2 border-gray-500  mb-12  "
                >
                  <span className="justify-center flex gap-2 items-center m-auto">
                    {" "}
                    SEND MESSAGE <GoPaperAirplane size={24} />{" "}
                  </span>
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-[#e9e6e6] text-3xl md:mt-32 sm:12">
                Call me
              </h1>
              <p className="text-[18px] text-white py-4">
                +880-1921569962 <br />
                +880-1890564265 (WP)
              </p>
              <h1 className="text-[#e9e6e6] text-3xl mt-24">Address</h1>
              <p className="text-[18px] text-white py-4">
                Dakshinkhan, Dhaka, <br />
                Bangladesh -1230
              </p>

              <ul className="flex gap-5 pb-4">
                <li className="mt-3  bg-white rounded-full ">
                  <a
                    href="https://www.facebook.com/kamrulhasanrifat00"
                    target="_blank"
                  >
                    <BiLogoFacebook size={30} />
                  </a>
                </li>
                <li className="mt-3 bg-white rounded-lg  ">
                  <a
                    href="https://x.com/HasanRifat5138"
                    target="_blank"
                    className="p-2"
                  >
                    <AiOutlineTwitter size={30} />
                  </a>
                </li>
                <li className="mt-3 text-white ">
                  <a
                    href="https://www.instagram.com/design.kamrulhasan/"
                    target="_blank"
                  >
                    <RxInstagramLogo size={30} />
                  </a>
                </li>
                <li className="mt-3 text-white ">
                  <a
                    href="https://www.linkedin.com/in/kamrulhasanrifat/"
                    target="_blank"
                  >
                    <BsLinkedin size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* from end */}

        <div className={inknutAntiqua.className}>
          <hr />
          <p className="leading-loose text-[#e8e8eb] text-[15px] font-normal text-center py-4 pb-12 mt-2">
            © 2024 DesignDotKamrulHasan | All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
