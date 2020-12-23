import { Link } from "react-router-dom";
import Nav from "./Nav";

import styled from "styled-components";

const LinksContainer = styled.div`
  height: 90vh;
  flex-direction: column;
`;

export const Settings = () => {
  return (
    <>
      <Nav />
      <LinksContainer className="flex-center">
        <Link to="/settings/languages">Language Options</Link>
        <Link to="/settings/signout">Sign Out</Link>
      </LinksContainer>
    </>
  );
};
