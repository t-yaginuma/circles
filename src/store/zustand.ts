// store
import { create } from "zustand";

type State = {
  isAuthenticated: boolean;
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
  isChangePwModalOpen: boolean;
};

type Action = {
  setIsAuthenticated: (by: boolean) => void;
  setIsLoginModalOpen: (by: boolean) => void;
  setIsSignUpModalOpen: (by: boolean) => void;
  setIsChangePwModalOpen: (by: boolean) => void;
};

export const useStore = create<State & Action>()((set) => ({
  isAuthenticated: false,
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  isChangePwModalOpen: false,
  setIsAuthenticated: (by) => set((state) => ({ isAuthenticated: by })),
  setIsLoginModalOpen: (by) => set((state) => ({ isLoginModalOpen: by })),
  setIsSignUpModalOpen: (by) => set((state) => ({ isSignUpModalOpen: by })),
  setIsChangePwModalOpen: (by) => set((state) => ({ isChangePwModalOpen: by })),
}));
