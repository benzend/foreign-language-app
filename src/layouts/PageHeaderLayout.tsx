interface IPageHeaderLayoutProps {}

export const PageHeaderLayout: React.FC<IPageHeaderLayoutProps> = ({
  children,
}) => {
  return <div className="pt-5 text-center">{children}</div>;
};
