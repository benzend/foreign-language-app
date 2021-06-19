import { Link } from "react-router-dom";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import Nav from "./Nav";

export const SpanishLessons = () => {
  return (
    <div>
      <Nav />
      <PageHeaderLayout>
        <h2>Spanish Lessons</h2>
      </PageHeaderLayout>
      <div className="flex-center">
        <Link to="/spanish/lesson1">Spanish Lesson 1</Link>
      </div>
    </div>
  );
};
