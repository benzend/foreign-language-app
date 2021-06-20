import { Link } from "react-router-dom";
import { Nav } from "./Nav";

import { Button } from "./Button";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { MaxWidthCenterLayout } from "../layouts/MaxWidthCenterLayout";

export const Settings = () => {
  return (
    <>
      <Nav />
      <MaxWidthCenterLayout>
        <PageHeaderLayout>
          <PageTitleLayout>Settings</PageTitleLayout>
        </PageHeaderLayout>
        <div className="text-center mt-5">
          <div className="mb-1">
            <Link to="/settings/languages">
              <Button>Language Options</Button>
            </Link>
          </div>
          <div>
            <Link to="/signout">
              <Button>Sign Out</Button>
            </Link>
          </div>
        </div>
      </MaxWidthCenterLayout>
    </>
  );
};
