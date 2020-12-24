import { Link } from "react-router-dom";
import { PageHeader } from "../layouts/PageHeader";
import Nav from "./Nav";

export const GermanLessons = () => {
  return (
    <div>
      <Nav />
      <PageHeader>
        <h2>Your Lessons</h2>
      </PageHeader>
      <div className="flex-center">
        <Link to="/german/lesson1">German Lesson 1</Link>
      </div>
    </div>
  );
};
