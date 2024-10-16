import { useState } from "react";
const useModal = (): [boolean, () => void, () => void] => {
  const [isModalVisible, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };
  return [isModalVisible, openModal, closeModal];
};

export default useModal;
