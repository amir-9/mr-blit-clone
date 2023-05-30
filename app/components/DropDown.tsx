"use client";

import { useStore } from "../store/store";
import type { NavItemType, StateType } from "../types";

interface DropDownProps {
  data: Array<NavItemType>;
}

const DropDown: React.FC<DropDownProps> = ({ data }) => {
  // const service = useStore((state) => state.service);
  const changeService = useStore((state) => state.changeService);

  const clickHandler = (state: StateType["service"]) => {
    changeService(state);
  };

  return (
    <div
      className="
        hidden
        bg-white
        text-black
        top-[40px]
        right-[0]
        w-[200px]
        rounded-md
        overflow-hidden
        shadow-md
        group-hover:flex
        group-hover:absolute
      "
    >
      <ul className="w-full">
        {data.map((item, index) => (
          <li
            key={index}
            onClick={() => clickHandler(item.state)}
            className="
              py-3
              px-3
              w-full
              hover:bg-slate-200
              flex
              items-center
              gap-4
              text-[14px]
            "
          >
            <span className="w-5 h-[18px]">{item.navbarIcon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
