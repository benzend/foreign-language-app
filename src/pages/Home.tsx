import Nav from "../components/Nav";

import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";

export const Home = () => {
  return (
    <>
      <Nav />
      <div>
        <PageHeaderLayout>
          <PageTitleLayout>Home</PageTitleLayout>
        </PageHeaderLayout>
      </div>
    </>
  );
};
