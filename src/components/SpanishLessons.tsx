import { Link } from "react-router-dom";
import { MaxWidthCenterLayout } from "../layouts/MaxWidthCenterLayout";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { Nav } from "./Nav";

export const SpanishLessons = () => {
  return (
    <div>
      <Nav />
      <MaxWidthCenterLayout>
        <PageHeaderLayout>
          <PageTitleLayout>Spanish Lessons</PageTitleLayout>
        </PageHeaderLayout>
        <div className="flex-center">
          <Link to="/spanish/lesson1">Spanish Lesson 1</Link>
        </div>
      </MaxWidthCenterLayout>
    </div>
  );
};
