"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import behance from "../assets/language.png";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Inknut_Antiqua } from "@next/font/google";
import { IoMenuSharp } from "react-icons/io5";

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Navbar = () => {
  const [active, setActive] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const navItems = (
    <>
      <li>
        <a className="text-2xl md:text-xl">About</a>
      </li>
      <li>
        <a className="text-2xl md:text-xl">Work</a>
      </li>
      <li>
        <a className="text-2xl md:text-xl">Contact</a>
      </li>
    </>
  );

  return (
    <div className={`navbar w-full px-3 md:px-12 ${inknutAntiqua.className}  `}>
      {/* Left */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl mb-3   md:mb-4 -ml-10 md:ml-[-20px] ">
          <Image
            alt="logo"
            className="w-[84px] md:w-[176px] h-[50px] md:h-[76px] "
            src={logo}
          ></Image>
        </a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 font-bold text-2xl">
          {navItems}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        <div className="dropdown lg:hidden">
          <div className="flex justify-center items-center">
            <Image alt="language icon" src={behance}></Image>
            <div
              tabIndex={0}
              onClick={() => setActive(!active)}
              role="button"
              className="btn btn-ghost"
            >
              {active ? (
                <button className=" mr-2">
                  <RxCross1 className="text-3xl  font-extrabold" />
                </button>
              ) : (
                <>
                  <div className=" border-white px-4 py-1 border-2 rounded-xl">
                    <IoMenuSharp className="text-3xl" />
                  </div>
                </>
              )}
            </div>
          </div>

          {active && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 backdrop-blur-sm bg-black/20    py-5 right-0 w-[450px] h-[300px] p-2 shadow flex justify-center items-center font-extrabold text-5xl pl-20 "
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{
                  delay: 0.1,
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                {navItems}
              </motion.div>
              <div className="flex lg:hidden gap-1">
                <button className="btn btn-sm outline-none cursor-pointer">
                  <a
                    href="KamrulHasanRifat.pdf"
                    download
                    className="px-4 md:px-2 py-1 rounded-md "
                  >
                    Download Resume
                  </a>
                </button>
              </div>
            </ul>
          )}
        </div>

        <div className="hidden lg:flex gap-1 mr-5">
          <a href="https://www.behance.net/kamrulhasanrifat" target="_blank">
            {" "}
            <Image alt="language icon" src={behance}></Image>
          </a>
          <a
            href="KamrulHasanRifat.pdf"
            download
            className="bg-[#1E1E1E] cursor-pointer outline outline-1 outline-white px-3 py-2 rounded-md"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
