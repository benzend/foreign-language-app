import { Link, useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReduxState } from "../interfaces/interfaces";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/userSlice";

interface Props {}

const Nav = ({}: Props) => {
  const user = useAppSelector(selectUser);
  const history = useHistory();

  const LanguageLink = () => {
    if (user.value?.currentTargetLanguage === "german") {
      return <Link to="/german/lessons">German Lessons</Link>;
    } else if (user.value?.currentTargetLanguage === "spanish") {
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
