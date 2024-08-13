import Image from "next/image";
import logo from "../assets/logo.png";
import language from "../assets/language.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Work</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar  w-full">
      {/* Left */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl ml-[-20px] ">
          <Image alt="logo" className="w-10/12 md:w-11/12 " src={logo}></Image>
        </a>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-lg">
          {navItems}
        </ul>
      </div>

      {/* Right side*/}
      <div className="navbar-end ">
        <div className="dropdown lg:hidden ">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 backdrop-blur-sm  bg-black/20 py-5  right-0 w-[450px] h-[300px] p-2 shadow   flex justify-center items-center font-extrabold text-5xl pl-10 "
          >
            {navItems}

            <div className="flex lg:hidden gap-1 ">
              <Image alt="language icon" src={language}></Image>
              <button className="btn btn-sm outline-none   ">
                <a className="   px-4 md:px-2  py-1 rounded-md">
                  Download Resume
                </a>
              </button>
            </div>
          </ul>
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
