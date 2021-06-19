import { Link } from "react-router-dom";
import Nav from "./Nav";

export const Settings = () => {
  return (
    <>
      <Nav />
      <div>
        <Link to="/settings/languages">
          <button>Language Options</button>
        </Link>
        <Link to="/settings/signout">
          <button>Sign Out</button>
        </Link>
      </div>
    </>
  );
};
