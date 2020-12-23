import { Link } from "react-router-dom";
import { Nav } from "./Nav";

export const GermanLessons = () => {
  return (
    <div>
      <Nav />
      <h2>this is german lessons</h2>
      <Link to="/german/lessons/lesson1">German Lesson 1</Link>
    </div>
  );
};
