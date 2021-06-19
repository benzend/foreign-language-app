import Nav from "../components/Nav";

import { PageHeader } from "../layouts/PageHeader";

export const Home = () => {
  return (
    <>
      <Nav />
      <div>
        <PageHeader>
          <h2>Home</h2>
        </PageHeader>
      </div>
    </>
  );
};
