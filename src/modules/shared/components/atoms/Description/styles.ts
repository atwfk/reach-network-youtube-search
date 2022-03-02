import styled from "styled-components";
import { COLORS, SCREENS } from "../../../constants";

export const StyledDescription = styled.p`
  color: ${COLORS.GREY_SHD1};
  font-size: 15px;

  @media (min-width: ${SCREENS.MD}) {
    font-size: 20px;
  }
`;
