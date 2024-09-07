"use client";

import { CsButton } from "@/components/circles/CsButton";
import { useModalStore } from "@/store/modal-handle";
import { useAuthStore } from "@/store/auth";

const CsButtonEstablishCircle = () => {
  const storeModal = useModalStore();
  const storeAuth = useAuthStore();
  return (
    <>
      {storeAuth.isAuthenticated && (
        <CsButton
          className="fixed bottom-8 right-8"
          text="Establish Your Circle"
          type="button"
          onClick={() => {
            storeModal.setIsOpenEstablishCircleModal(true);
          }}
        />
      )}
    </>
  );
};

export { CsButtonEstablishCircle };
