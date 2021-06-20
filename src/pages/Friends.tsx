import { Nav } from "../components/Nav";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";

export const Friends = () => {
  return (
    <>
      <Nav />
      <PageHeaderLayout>
        <PageTitleLayout>Friends</PageTitleLayout>
      </PageHeaderLayout>
    </>
  );
};
