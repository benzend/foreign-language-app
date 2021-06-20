import { Nav } from "../components/Nav";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { MaxWidthCenterLayout } from "../layouts/MaxWidthCenterLayout";

export const Leaderboards = () => {
  return (
    <>
      <Nav />
      <MaxWidthCenterLayout>
        <PageHeaderLayout>
          <PageTitleLayout>Leaderboards</PageTitleLayout>
        </PageHeaderLayout>
      </MaxWidthCenterLayout>
    </>
  );
};
