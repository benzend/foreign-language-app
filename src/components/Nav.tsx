import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/german/lessons">German Lessons</Link>
    </nav>
  );
};
