import { Link, useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReduxState } from "../interfaces/interfaces";

interface Props {}

const Nav = ({}: Props) => {
  const currentLanguage = useSelector((state: ReduxState) => state.language);

  const history = useHistory();

  const LanguageLink = () => {
    if (currentLanguage === "german") {
      return <Link to="/german/lessons">German Lessons</Link>;
    } else if (currentLanguage === "spanish") {
      return <Link to="/spanish/lessons">Spanish Lessons</Link>;
    } else {
      history.push("/settings/languages");
      return null;
    }
  };

  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/leaderboards">Leaderboards</Link>
      <LanguageLink />
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default withRouter(Nav);
