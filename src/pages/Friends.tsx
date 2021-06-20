import { Nav } from "../components/Nav";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { MaxWidthCenterLayout } from "../layouts/MaxWidthCenterLayout";

export const Friends = () => {
  return (
    <>
      <Nav />
      <MaxWidthCenterLayout>
        <PageHeaderLayout>
          <PageTitleLayout>Friends</PageTitleLayout>
        </PageHeaderLayout>
      </MaxWidthCenterLayout>
    </>
  );
};
