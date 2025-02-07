"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./useModal";
import { MouseEvent } from "react";

export default function Modal({ children }: PropsWithChildren) {
  const { open, openModal, closeModal } = useModalContext();
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const preventClose = (event: MouseEvent) => event.stopPropagation();

  useEffect(() => {
    setModalRoot(document.getElementById("modal"));
  }, []);

  useEffect(() => {
    return () => {
      if (open) closeModal();
    };
  }, []);

  if (!open || !modalRoot) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50 starting-opacity"
      onClick={closeModal}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div
          className="relative bg-white rounded-lg shadow-xl p-6 flex flex-col gap-4"
          ref={modalRef}
          onClick={(event) => preventClose(event)}
        >
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
