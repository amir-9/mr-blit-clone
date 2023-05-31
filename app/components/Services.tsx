"use client";

import ServiceItem from "./ServiceItem";
import { headerItems } from "../constants";

const Services = () => {
  return (
    <div
      className="
        z-[15] 
        absolute 
        -bottom-[40px] 
        w-full 
        flex 
        justify-center
        rtl
      "
    >
      <div
        className="
          relative 
          w-full 
          max-w-[1200px]
          flex 
          justify-start
          gap-2
        "
      >
        {headerItems.map((item, index) => (
          <ServiceItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
