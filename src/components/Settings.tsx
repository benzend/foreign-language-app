import { Link } from "react-router-dom";
import Nav from "./Nav";

import { Button } from "./Button";

export const Settings = () => {
  return (
    <>
      <Nav />
      <div>
        <Link to="/settings/languages">
          <Button>Language Options</Button>
        </Link>
        <Link to="/signout">
          <Button>Sign Out</Button>
        </Link>
      </div>
    </>
  );
};
