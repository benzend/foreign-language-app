import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReduxState } from "../interfaces/interfaces";

interface Props {
  history: any;
}

const Nav = ({ history }: Props) => {
  const currentLanguage = useSelector((state: ReduxState) => state.language);

  const languageLink = () => {
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
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/leaderboards">Leaderboards</Link>
      <Link to="/friends">Friends</Link>
      {languageLink()}
    </nav>
  );
};

export default withRouter(Nav);
