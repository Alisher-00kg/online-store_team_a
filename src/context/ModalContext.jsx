import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const openModal = (name) => {
    setModals((prev) => ({ ...prev, [name]: true }));
  };

  const closeModal = (name) => {
    setModals((prev) => ({ ...prev, [name]: false }));
  };

  const isOpen = (name) => !!modals[name];
  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);
