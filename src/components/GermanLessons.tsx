import { Link } from "react-router-dom";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { Nav } from "./Nav";
import { MaxWidthCenterLayout } from "../layouts/MaxWidthCenterLayout";

export const GermanLessons = () => {
  return (
    <div>
      <Nav />
      <MaxWidthCenterLayout>
        <PageHeaderLayout>
          <PageTitleLayout>Your Lessons</PageTitleLayout>
        </PageHeaderLayout>
        <div className="flex-center">
          <Link to="/german/lesson1">German Lesson 1</Link>
        </div>
      </MaxWidthCenterLayout>
    </div>
  );
};
