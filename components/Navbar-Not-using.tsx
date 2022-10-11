import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";
import mobLogo from "../images/navLogo.png";
import deskLogo from "../images/logo2.png";
import menu from "../images/menu.png";
import { useState } from "react";

const Navbar: NextComponentType = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className="bg-[#202020] z-20 sticky top-0 h-[72px]">
        <div className="innerDiv">
          <div className="py-4 gap-8 flex justify-between items-center">
            {/* logo */}
            <div className="cursor-pointer">
              <div className="md:hidden">
                <Image alt="" src={mobLogo}></Image>
              </div>
              <div className="hidden md:block">
                <Image alt="" src={deskLogo}></Image>
              </div>
            </div>
            {/* navLinks */}
            <ul
              className={`text-white bg-[#202020] navLinks ${
                isOpen ? "open" : ""
              } flex md:gap-8 lg:gap-16`}
            >
              <Link href="https://gurucool.xyz/">
                <a className="font-light">Home</a>
              </Link>
              <Link href="#">
                <a className="font-light">Courses</a>
              </Link>
              <Link href="https://blog.gurucool.xyz/">
                <a className="font-light">Blog</a>
              </Link>
              <Link href="">
                <a className="font-light">Contact</a>
              </Link>
            </ul>
            <div className="hidden md:flex">
              <Link href="login">
                <a className="text-sm bg-primary whitespace-nowrap px-4 pr-0  py-2 rounded-r-none rounded-2xl ">
                  Login
                </a>
              </Link>
              <span className="text-sm bg-primary px-1 flex items-center">
                |
              </span>
              <Link href="signup">
                <a className="text-sm bg-primary whitespace-nowrap rounded-l-none px-4 pl-0 py-2 rounded-2xl ">
                  Signup
                </a>
              </Link>
            </div>
            {/* Menu */}
            <div className="md:hidden cursor-pointer">
              <Image alt="" onClick={() => setOpen(!isOpen)} src={menu}></Image>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
