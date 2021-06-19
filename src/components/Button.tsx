import React from "react";

interface IButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded border border-purple-500 pr-1 pl-1 hover:bg-purple-500 hover:text-white"
    >
      {children}
    </button>
  );
};
