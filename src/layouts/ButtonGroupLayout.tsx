import React from "react";

interface IButtonGroupLayoutProps {}

export const ButtonGroupLayout: React.FC<IButtonGroupLayoutProps> = ({
  children,
}) => {
  return <div className="p-0.5">{children}</div>;
};
