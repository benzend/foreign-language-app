import { Link } from "react-router-dom";
import { PageHeader } from "../layouts/PageHeader";
import Nav from "./Nav";

export const SpanishLessons = () => {
  return (
    <div>
      <Nav />
      <PageHeader>
        <h2>Spanish Lessons</h2>
      </PageHeader>
      <Link to="/spanish/lesson1">Spanish Lesson 1</Link>
    </div>
  );
};
