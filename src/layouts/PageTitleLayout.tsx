import React from "react";

interface IPageTitleProps {}

export const PageTitleLayout: React.FC<IPageTitleProps> = ({ children }) => {
  return <h1 className="text-xl">{children}</h1>;
};
