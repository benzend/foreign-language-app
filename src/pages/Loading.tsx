import ReactLoading from "react-loading";
import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Page>
      <ReactLoading type="bubbles" color="var(--primary-color)" />
    </Page>
  );
};
