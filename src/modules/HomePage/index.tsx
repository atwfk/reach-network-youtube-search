import React from "react";
import type { FC, ReactElement } from "react";
import styled from "styled-components";

const StyledHomePage = styled.section`
  display: flex;
  justify-content: center;
`;

const HomePage: FC = (): ReactElement => {
  return <StyledHomePage>Start searching for some videos</StyledHomePage>;
};

export default HomePage;
