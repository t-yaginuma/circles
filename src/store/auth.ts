// store
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  isAuthenticated: boolean;
};

type Action = {
  setIsAuthenticated: (by: boolean) => void;
};

export const useAuthStore = create(
  persist<State & Action>(
    (set, get) => ({
      isAuthenticated: false,
      setIsAuthenticated: (by) => {
        return set({ isAuthenticated: by });
      },
    }),
    {
      name: "circle-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
