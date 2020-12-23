import { Link } from "react-router-dom";
import Nav from "./Nav";

export const Settings = () => {
  return (
    <>
      <Nav />
      <Link to="/settings/languages">Language Options</Link>
      <Link to="/settings/signout">Sign Out</Link>
    </>
  );
};
