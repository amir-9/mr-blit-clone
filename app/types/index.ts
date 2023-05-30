export type StepType = "mobileOrEmail" | "password" | "confirmCode";
export type StepStateType = {
  step: StepType;
  setStep: (step: StepType) => void;
};

export type MobileOrEmailType = string;
export type MobileOrEmailStateType = {
  mobileOrEmail: MobileOrEmailType;
  setMobileOrEmail: (mobileOrEmail: MobileOrEmailType) => void;
};
