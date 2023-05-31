"use client";

import clsx from "clsx";

import { HeaderItemType, StateType } from "../types";
import { useStore } from "./../store/store";

interface ServiceItemProps {
  data: HeaderItemType;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ data }) => {
  const service = useStore((state) => state.service);
  const changeService = useStore((state) => state.changeService);
  const isSelected = data.state === service;
  const clickHandler = (item: StateType["service"]) => {
    changeService(item);
  };

  return (
    <div
      onClick={() => clickHandler(data.state)}
      className={clsx(
        `
        relative
        w-[104px]
        h-[104px]
        flex
        justify-center
        items-center
        cursor-pointer
        rounded-2xl
        shadow-[0_1px_5px_0_rgba(0,0,0,.15)]
        transition
      `,
        isSelected
          ? "bg-[#ffda73] text-[#705200] fill-[#705200]"
          : "bg-white text-[#0f84fa] fill-[#0f84fa]"
      )}
    >
      <div
        className="
          flex
          flex-col
          justify-center
          items-center
          
        "
      >
        {data.state === "travelBag" && (
          <span
            className={clsx(
              `
              absolute
              flex 
              items-center
              justify-center
              top-2
              -left-[7px]
              w-10
              h-4.5
              rounded-[4px_4px_4px_0]
                
              py-0.5
              font-bold
              text-[10.5px]
            `,

              isSelected
                ? "text-[#ffda73] bg-[#705200]"
                : "text-[#705200] bg-[#ffda73]"
            )}
          >
            جدید
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx(
                `
                absolute
                left-0
                top-[100%]
              `,
                isSelected ? "fill-[#705200]" : "fill-[#ffda73]"
              )}
            >
              <path d="M8 9L0 0H8V9Z"></path>
            </svg>
          </span>
        )}
        <div className="">{data.headerIcon}</div>
        <div
          className="
            min-h-[28px]
            font-bold
            text-sm
            leading-7
            
          "
        >
          {data.title}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
