import styled from "styled-components";
import { SCREENS } from "../../../constants";

export const StyledTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;

  @media (min-width: ${SCREENS.MD}) {
    font-size: 25px;
  }
`;
