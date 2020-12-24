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
          <h1>Home</h1>
        </PageHeader>
      </StyledContainer>
    </>
  );
};
