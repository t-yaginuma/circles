// store
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  uid: string | null;
  image: string | null;
};

type Action = {
  setUid: (by: string | null) => void;
  setImage: (by: string | null) => void;
  initializeUid: () => void;
};

export const useMeStore = create(
  persist<State & Action>(
    (set, get) => ({
      uid: null,
      image: null,
      setUid: (by) => {
        return set({ uid: by });
      },
      setImage: (by) => {
        return set({ image: by });
      },
      initializeUid: () => {
        return set({ uid: null });
      },
    }),
    {
      name: "circle-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
