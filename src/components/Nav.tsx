import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/leaderboards">Leaderboards</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/german/lessons">German Lessons</Link>
      <Link to="/spanish/lessons">Spanish Lessons</Link>
    </nav>
  );
};
