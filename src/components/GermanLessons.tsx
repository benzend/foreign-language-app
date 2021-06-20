import { Link } from "react-router-dom";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { Nav } from "./Nav";

export const GermanLessons = () => {
  return (
    <div>
      <Nav />
      <PageHeaderLayout>
        <PageTitleLayout>Your Lessons</PageTitleLayout>
      </PageHeaderLayout>
      <div className="flex-center">
        <Link to="/german/lesson1">German Lesson 1</Link>
      </div>
    </div>
  );
};
