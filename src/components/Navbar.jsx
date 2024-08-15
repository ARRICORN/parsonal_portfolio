"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import language from "../assets/language.png";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
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
    <div className="navbar w-full">
      {/* Left */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl ml-[-20px]">
          <Image
            alt="logo"
            className="w-11/12 md:w-full mb-1 md:mb-3"
            src={logo}
          ></Image>
        </a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-lg">
          {navItems}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
            onClick={() => setActive(!active)}
          >
            {active ? (
              <button>
                <RxCross1 className="text-2xl font-extrabold" />
              </button>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </div>

          {active && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 backdrop-blur-sm bg-black/20 py-5 right-0 w-[450px] h-[300px] p-2 shadow flex justify-center items-center font-extrabold text-5xl pl-10 "
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
                <Image alt="language icon" src={language}></Image>
                <button className="btn btn-sm outline-none">
                  <a className="px-4 md:px-2 py-1 rounded-md">
                    Download Resume
                  </a>
                </button>
              </div>
            </ul>
          )}
        </div>

        <div className="hidden lg:flex gap-1 mr-5">
          <Image alt="language icon" src={language}></Image>
          <a className="bg-[#1E1E1E] outline outline-1 outline-white px-3 py-2 rounded-md">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
