import { StepProvider } from "@/app/context/StepContext";

import HeaderBg from "../components/HeaderBg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <StepProvider>
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
    </StepProvider>
  );
};

export default Header;
