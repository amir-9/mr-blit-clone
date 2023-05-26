import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="
        bg-[url('../public/images/header/desktop-background.svg')] 
        h-[300px] 
        w-[100%]
        bg-no-repeat 
        relative
      "
    >
      <Navbar />
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-[200px]
          z-10
          header-left
        "
      />
      <div
        className="
          absolute
          left-[200px]
          right-[200px]
          top-0
          h-full
          z-10
          bg-[rgba(15,132,250,.1)]
        "
      />
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-[200px]
          z-10
          header-right
        "
      />
    </header>
  );
};

export default Header;
