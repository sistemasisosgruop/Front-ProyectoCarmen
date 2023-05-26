import { useState } from "react";

interface ModalState {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = (): ModalState => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = (): void => {
    setIsOpenModal(true);
  };

  const closeModal = (): void => {
    setIsOpenModal(false);
  };

  return { isOpenModal, openModal, closeModal };
};
