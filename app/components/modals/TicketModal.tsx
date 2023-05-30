"use client";

import Image from "next/image";
// import axios from "axios";
// import { signIn, useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

import Modal from "./Modal";
import TrackTicketForm from "../forms/TrackTicketForm";

interface TicketModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="
          absolute 
          left-0 
          top-0 
          hidden 
          pl-2
          pt-2 
          sm:block
          z-10
        "
      >
        <button
          type="button"
          className="
            rounded-md 
            text-[#b2b2b2]
            hover:text-rose-400 
            transition
            focus:outline-none 
            p-2
          "
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <IoClose className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <TrackTicketForm />
    </Modal>
  );
};

export default TicketModal;
