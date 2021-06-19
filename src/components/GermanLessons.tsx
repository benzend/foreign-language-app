import { Link } from "react-router-dom";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import Nav from "./Nav";

export const GermanLessons = () => {
  return (
    <div>
      <Nav />
      <PageHeaderLayout>
        <h2>Your Lessons</h2>
      </PageHeaderLayout>
      <div className="flex-center">
        <Link to="/german/lesson1">German Lesson 1</Link>
      </div>
    </div>
  );
};
