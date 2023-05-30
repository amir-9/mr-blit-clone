"use client"

import { useState, createContext, PropsWithChildren } from "react";

import { MobileOrEmailType, MobileOrEmailStateType } from "../types";

export const MobileOrEmailContext = createContext<MobileOrEmailStateType | null>(null);

export const MobileOrEmailProvider = (props: PropsWithChildren) => {
  const [mobileOrEmail, setMobileOrEmail] = useState<MobileOrEmailType>("");

  return (
    <MobileOrEmailContext.Provider value={{ mobileOrEmail, setMobileOrEmail }}>
      {props.children}
    </MobileOrEmailContext.Provider>
  );
};
