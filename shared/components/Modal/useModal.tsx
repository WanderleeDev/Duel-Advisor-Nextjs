import { createContext, PropsWithChildren, useContext, useState } from "react";
import { FnVoid } from "@/shared/interfaces/FnVoid.type";

interface ModalContext {
  open: boolean;
  openModal: FnVoid;
  closeModal: FnVoid;
}

const ModalContext = createContext<ModalContext>({
  open: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = (): ModalContext => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
