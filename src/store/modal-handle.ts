// store
import { create } from "zustand";

type State = {
  isOpenLoginModal: boolean;
  isOpenSignUpModal: boolean;
  isOpenPasswordReIssueModal: boolean;
  isOpenEstablishCircleModal: boolean;
  isOpenProfileUpdateModal: boolean;
};

type Action = {
  setIsOpenLoginModal: (by: boolean) => void;
  setIsOpenSignUpModal: (by: boolean) => void;
  setIsOpenPasswordReIssueModal: (by: boolean) => void;
  setIsOpenEstablishCircleModal: (by: boolean) => void;
  setIsOpenProfileUpdateModal: (by: boolean) => void;
};

export const useModalStore = create<State & Action>((set) => ({
  isOpenLoginModal: false,
  isOpenSignUpModal: false,
  isOpenPasswordReIssueModal: false,
  isOpenEstablishCircleModal: false,
  isOpenProfileUpdateModal: false,
  setIsOpenLoginModal: (by) => set((state) => ({ isOpenLoginModal: by })),
  setIsOpenSignUpModal: (by) => set((state) => ({ isOpenSignUpModal: by })),
  setIsOpenPasswordReIssueModal: (by) =>
    set((state) => ({ isOpenPasswordReIssueModal: by })),
  setIsOpenEstablishCircleModal: (by) =>
    set((state) => ({ isOpenEstablishCircleModal: by })),
  setIsOpenProfileUpdateModal: (by) =>
    set((state) => ({ isOpenProfileUpdateModal: by })),
}));
