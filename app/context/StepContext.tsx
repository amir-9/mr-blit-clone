"use client";

import { useState, createContext, PropsWithChildren } from "react";

import { StepType, StepStateType } from "../types";

export const StepContext = createContext<StepStateType | null>(null);

export const StepProvider = (props: PropsWithChildren) => {
  const [step, setStep] = useState<StepType>("mobileOrEmail");

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {props.children}
    </StepContext.Provider>
  );
};
