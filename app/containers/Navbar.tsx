"use client";

import Image from "next/image";
import { useState } from "react";

import NavbarIcons from "../components/icons/NavbarIcons";
import { navbarItems } from "@/app/constants";
import DropDown from "../components/DropDown";
import LoginModal from "../components/modals/LoginModal";
import useStep from "../hooks/useStep";
import TicketModal from "../components/modals/TicketModal";

const Navbar = () => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { step, setStep } = useStep();

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
    setStep("mobileOrEmail");
  };

  const handleTicketModalClose = () => {
    setIsTicketModalOpen(false);
  };

  return (
    <>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} />
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={handleTicketModalClose}
      />
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
                  group
                  relative
                "
                >
                  <span>خدمات سفر</span>
                  <span className="w-[12px]">
                    <NavbarIcons name="angleDown" fill="white" />
                  </span>
                  <DropDown data={navbarItems} />
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setIsTicketModalOpen(!isTicketModalOpen);
                    // console.log(isTicketModalOpen);
                  }}
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
                  onClick={() => {
                    setIsLoginModalOpen(!isLoginModalOpen);
                    // console.log(isLoginModalOpen);
                  }}
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
    </>
  );
};

export default Navbar;
