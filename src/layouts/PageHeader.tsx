import styled from "styled-components";

interface Props {
  children: any;
}

const StyledHeader = styled.header`
  text-align: center;
`;

export const PageHeader = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>;
};
