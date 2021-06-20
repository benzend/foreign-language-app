import { Link, useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReduxState } from "../interfaces/interfaces";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/userSlice";

interface Props {}

export const Nav = ({}: Props) => {
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
    <div className="flex w-full pt-1 pb-1 pl-1">
      <div className="pl-1 pr-1">
        <Link to="/home">Home</Link>
      </div>
      <div className="pl-1 pr-1">
        <Link to="/friends">Friends</Link>
      </div>
      <div className="pl-1 pr-1">
        <Link to="/leaderboards">Leaderboards</Link>
      </div>
      <div className="pl-1 pr-1">
        <LanguageLink />
      </div>
      <div className="pl-1 pr-1">
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};
