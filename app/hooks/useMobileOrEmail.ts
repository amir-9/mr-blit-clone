import { useContext } from "react";
import { MobileOrEmailStateType } from "../types";
import { MobileOrEmailContext } from "../context/MobileOrEmailContext";

const useMobileOrEmail = (): MobileOrEmailStateType => {
  const context = useContext(MobileOrEmailContext);

  if (!context)
    throw new Error("Please use MobileOrEmailProvider in parent component");

  return context;
};

export default useMobileOrEmail;
