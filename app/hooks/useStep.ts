import { useContext } from "react";
import { StepStateType } from "../types";
import { StepContext } from "../context/StepContext";

const useStep = (): StepStateType => {
  const context = useContext(StepContext);

  // Make sure it's not null!
  if (!context) {
    throw new Error("Please use StepProvider in parent component");
  }

  return context;
};

export default useStep;
