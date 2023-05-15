import React, { useEffect } from "react";
import type { FC, ReactElement } from "react";
import styled from "styled-components";
import useAnalytics from "../shared/hooks/useAnalytics";
import { useLocation } from "react-router-dom";

const StyledHomePage = styled.section`
  display: flex;
  justify-content: center;
`;

const HomePage: FC = (): ReactElement => {
  const { pathname } = useLocation();
  const { logEvent } = useAnalytics();

  useEffect(() => {
    logEvent("GAPageViews", "guest-pageview-homePage", pathname);
  }, []);

  return <StyledHomePage>Start searching for some videos</StyledHomePage>;
};

export default HomePage;
