"use client";

import { CsButton } from "@/components/circles/CsButton";
import { useModalStore } from "@/store/modal-handle";

type Props = {
  loginUserId?: string;
};

const CsButtonEstablishCircle = (props: Props) => {
  const { loginUserId } = props;
  const storeModal = useModalStore();

  return (
    <>
      {loginUserId && (
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
