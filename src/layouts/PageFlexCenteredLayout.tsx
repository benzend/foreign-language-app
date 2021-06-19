import React from "react";

interface IPageFlexCenteredLayoutProps {}

export const PageFlexCenteredLayout: React.FC<IPageFlexCenteredLayoutProps> = ({
  children,
}) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div>{children}</div>
    </div>
  );
};
