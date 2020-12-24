import Nav from "../components/Nav";

import styled from "styled-components";
import { PageHeader } from "../layouts/PageHeader";

const StyledContainer = styled.div``;

export const Home = () => {
  return (
    <>
      <Nav />
      <StyledContainer>
        <PageHeader>
          <h2>Home</h2>
        </PageHeader>
      </StyledContainer>
    </>
  );
};
