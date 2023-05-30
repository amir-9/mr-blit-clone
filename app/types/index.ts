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

export type VehicleType = "flight" | "train" | "bus" | "taxi" | "ship";
export type VehicleStateType = {
  vehicle: VehicleType;
  setVehicle: (vehicle: VehicleType) => void;
};

export type DataType = {
  step: StepType;
  mobileOrEmail: MobileOrEmailType;
  vehicle: VehicleType;
};
export type DataStateType = {
  data: DataType;
  setData: (data: DataType) => void;
};

// ///////////////////

export type StateType = {
  service: "ship" | "taxi" | "bus" | "train" | "travelBag" | "hotel" | "flight";
};

export type NavItemType = {
  title: string;
  navbarIcon: any;
  state: StateType["service"];
};
