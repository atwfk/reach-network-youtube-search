import styled from "styled-components";
import { COLORS, SCREENS } from "../../../constants";

export const StyledStats = styled.ul`
  display: block;
  color: ${COLORS.GREY_SHD1};
  font-weight: 400;
  font-size: 15px;

  @media (min-width: ${SCREENS.SM}) {
    display: flex;
  }

  li {
    margin-right: 6px;
    display: flex;
    align-items: center;

    .separator {
      margin-left: 6px;
      width: 2px;
      height: 2px;
      background-color: ${COLORS.GREY_SHD1};
      display: none;

      @media (min-width: ${SCREENS.SM}) {
        display: block;
      }
    }
  }
`;
