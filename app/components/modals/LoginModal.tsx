"use client";

import Image from "next/image";
// import axios from "axios";
// import { signIn, useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

import Modal from "./Modal";
import MobileOrEmailForm from "../forms/MobileOrEmailForm";
import useStep from "@/app/hooks/useStep";
import PasswordForm from "../forms/PasswordForm";
import { IoClose } from "react-icons/io5";

interface LoginModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  // const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const { step, setStep } = useStep();

  const toggleStep = useCallback(
    (move: "forward" | "back") => {
      if (move === "forward") {
        if (step === "mobileOrEmail") setStep("password");
        else if (step === "password") setStep("confirmCode");
      } else if (move === "back") {
        if (step === "password") setStep("mobileOrEmail");
        else if (step === "confirmCode") setStep("password");
      }
    },
    [step, setStep]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} blur>
      <div className="rtl flex h-[541px] w-[650px] bg-white">
        <div
          className="
          absolute 
          left-0 
          top-0 
          hidden 
          pl-4
          pt-4 
          sm:block
          z-10
        "
        >
          <button
            type="button"
            className="
            rounded-md 
            text-blue-400
            hover:text-blue-500 
            hover:bg-[rgba(15,132,250,.1)]
            focus:outline-none 
            p-2
          "
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <IoClose className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-[3] w-full">
          {step === "mobileOrEmail" && (
            <MobileOrEmailForm toggleHandler={toggleStep} />
          )}
          {step === "password" && <PasswordForm toggleHandler={toggleStep} />}
        </div>
        <div className="flex-[2] relative">
          <Image
            alt="login"
            src="/images/login.png"
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
