import React from "react";

interface IModalProps {
  isOpen: boolean;
  close: () => void;
}

export const Modal: React.FC<IModalProps> = ({ children, isOpen, close }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } flex justify-center items-center min-h-screen min-w-screen fixed top-0 left-0`}
    >
      <div>{children}</div>
    </div>
  );
};
