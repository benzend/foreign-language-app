import { Nav } from "../components/Nav";

import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { MaxWidthCenterLayout } from "../layouts/MaxWidthCenterLayout";

export const Home = () => {
  return (
    <>
      <Nav />
      <MaxWidthCenterLayout>
        <PageHeaderLayout>
          <PageTitleLayout>Home</PageTitleLayout>
        </PageHeaderLayout>
      </MaxWidthCenterLayout>
    </>
  );
};
