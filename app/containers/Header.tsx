import HeaderBg from "../components/HeaderBg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="
        bg-[#0f84fa]
        h-[300px] 
        w-[100%]
        bg-no-repeat 
        bg-center
        relative
      "
    >
      <Navbar />
      <HeaderBg />
    </header>
  );
};

export default Header;
