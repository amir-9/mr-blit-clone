"use client";

import Image from "next/image";
import HeaderBgImage from "./HeaderBgImage";

const HeaderBg = () => {
  return (
    <div
      className="
        flex
        justify-center
        w-full
        h-full
        absolute
        top-0
      "
    >
      <div
        className="
          z-10
          h-full
          max-w-[1648px]
          w-full
          overflow-hidden
          header-bt
          relative
        "
      >
        <HeaderBgImage item="flight" />
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-[200px]
            z-[11]
            header-left
            "
        />
        <div
          className="
            bg-[url('../public/images/header/desktop-background.svg')] 
            h-full 
            w-full
            bg-no-repeat 
            bg-center
            absolute
            z-10
            "
        />
        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-[200px]
            z-[11]
            header-right
          "
        />
      </div>
    </div>
  );
};

export default HeaderBg;
