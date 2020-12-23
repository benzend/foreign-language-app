import { Link } from "react-router-dom";
import Nav from "./Nav";

export const SpanishLessons = () => {
  return (
    <div>
      <Nav />
      <h2>Spanish Lessons</h2>
      <Link to="/spanish/lesson1">Spanish Lesson 1</Link>
    </div>
  );
};
