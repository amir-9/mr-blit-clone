"use client";

import Image from "next/image";
import NavbarIcons from "./icons/NavbarIcons";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center z-20 relative">
      <div
        className="
          px-10
          py-6
          w-full 
          max-w-[1290px]
          rtl
          text-white
          flex
          justify-between
        "
      >
        <div className="">
          <Image src="/images/logo.webp" alt="logo" width={86} height={32} />
        </div>
        <div>
          <ul className="flex items-center gap-6">
            <li>
              <div
                className="
                  flex 
                  items-center 
                  gap-4 
                  rounded-full 
                  hover:bg-[rgba(0,0,0,.1)]
                  px-3
                  py-2
                  cursor-pointer
                "
              >
                <span>خدمات سفر</span>
                <span className="w-[12px]">
                  <NavbarIcons name="angleDown" fill="white" />
                </span>
              </div>
            </li>
            <li>
              <div
                className="
                  flex 
                  items-center 
                  gap-2
                  rounded-full 
                  hover:bg-[rgba(0,0,0,.1)]
                  px-3
                  py-2
                  cursor-pointer
                "
              >
                <span className="w-[22px]">
                  <NavbarIcons name="ticket" fill="white" />
                </span>
                <span>پیگیری خرید</span>
              </div>
            </li>
            <li>
              <div
                className="
                  flex 
                  items-center 
                  gap-3
                  rounded-full 
                  hover:bg-[rgba(0,0,0,.1)]
                  px-3
                  py-2
                  cursor-pointer
                "
              >
                <span className="w-[17px]">
                  <NavbarIcons name="user" fill="white" />
                </span>
                <span>ورود به حساب کاربری</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
