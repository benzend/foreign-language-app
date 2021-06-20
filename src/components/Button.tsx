import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick = () => {},
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="rounded border border-purple-500 text-purple-500 pr-1 pl-1 hover:bg-purple-500 hover:text-white"
    >
      {children}
    </button>
  );
};
