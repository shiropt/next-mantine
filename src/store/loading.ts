import create from "zustand";

type State = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const useStore = create<State>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));
