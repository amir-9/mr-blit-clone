import { create } from "zustand";

type State = {
  service: "ship" | "taxi" | "bus" | "train" | "travelBag" | "hotel" | "flight";
};

type Action = {
  changeService: (state: State["service"]) => void;
};

export const useStore = create<State & Action>((set) => ({
  service: "flight",
  changeService: (item) => set(() => ({ service: item })),
}));
