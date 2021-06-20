import React from "react";
import { Button } from "./Button";

interface IModalProps {
  isOpen: boolean;
  close: () => void;
}

export const Modal: React.FC<IModalProps> = ({ children, isOpen, close }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } flex justify-center items-center min-h-screen min-w-full fixed top-0 left-0 bg-black bg-opacity-50`}
    >
      <div className="p-5 bg-white rounded relative">
        <div className="absolute top-0 right-0">
          <Button onClick={close}>Close</Button>
        </div>

        {children}
      </div>
    </div>
  );
};
