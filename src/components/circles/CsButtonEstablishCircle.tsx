"use client";

import { CsButton } from "@/components/circles/CsButton";
import { useModalStore } from "@/store/modal-handle";

type Props = {
  isAuthenticated?: boolean;
};

const CsButtonEstablishCircle = (props: Props) => {
  const { isAuthenticated } = props;
  const storeModal = useModalStore();

  return (
    <>
      {isAuthenticated && (
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
