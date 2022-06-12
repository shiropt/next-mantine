import create from "zustand";

type State = {
  isSignin: boolean;
  name: string;
  accessToken: string;
  setSignin: (isSignin: boolean) => void;
  setName: (name: string) => void;
  setAccessToken: (accessToken: string) => void;
};

export const useStore = create<State>((set) => ({
  isSignin: false,
  name: "",
  accessToken: "",
  setSignin: (isSignin) => set({ isSignin }),
  setName: (name) => set({ name }),
  setAccessToken: (accessToken) => set({ accessToken }),
}));
