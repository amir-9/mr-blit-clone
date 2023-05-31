"use client";

import HeaderBgImage from "./HeaderBgImage";
import { useStore } from "../store/store";

const HeaderBg = () => {
  const service = useStore((state) => state.service);
  // console.log(service);
  


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
        <HeaderBgImage item={service} />
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
