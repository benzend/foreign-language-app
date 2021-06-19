import { Link } from "react-router-dom";
import Nav from "./Nav";

import { Button } from "./Button";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";

export const Settings = () => {
  return (
    <>
      <Nav />
      <div>
        <PageHeaderLayout>
          <PageTitleLayout>Settings</PageTitleLayout>
        </PageHeaderLayout>
        <Link to="/settings/languages">
          <Button>Language Options</Button>
        </Link>
        <Link to="/signout">
          <Button>Sign Out</Button>
        </Link>
      </div>
    </>
  );
};
