"use client";

interface DropDownProps {
  data: Array<{ title: string; navbarIcon: any }>;
}

const DropDown: React.FC<DropDownProps> = ({ data }) => {
  const clickHandler = (e: any) => {
    console.log(e.target.innerText);
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
        {data.map((item: { title: string; navbarIcon: any }, index: number) => (
          <li
            key={index}
            onClick={(e) => clickHandler(e)}
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
