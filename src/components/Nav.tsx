import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReduxState } from "../interfaces/interfaces";
import styled from "styled-components";

interface Props {
  history: any;
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: auto;
  a {
    border: solid 2px #0000;
    border-radius: 2px;
    padding: 0 7px;
    &:hover {
      border: solid 2px var(--primary-color);
    }
  }
`;

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
    <StyledNav>
      <Link to="/home">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/leaderboards">Leaderboards</Link>
      {languageLink()}
      <Link to="/settings">Settings</Link>
    </StyledNav>
  );
};

export default withRouter(Nav);
