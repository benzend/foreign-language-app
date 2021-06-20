import { Nav } from "../components/Nav";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";

export const Leaderboards = () => {
  return (
    <>
      <Nav />
      <PageHeaderLayout>
        <PageTitleLayout>Leaderboards</PageTitleLayout>
      </PageHeaderLayout>
    </>
  );
};
