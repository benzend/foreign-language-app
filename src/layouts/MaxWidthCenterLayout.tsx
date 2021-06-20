import React from "react";

interface IMaxWidthCenterLayoutProps {}

export const MaxWidthCenterLayout: React.FC<IMaxWidthCenterLayoutProps> = ({
  children,
}) => {
  return <div className="max-w-screen-lg m-auto p-5">{children}</div>;
};
