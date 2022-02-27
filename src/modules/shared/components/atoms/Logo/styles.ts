import styled from "styled-components";
import { SCREENS } from "../../../constants";

export const StyledLogo = styled.div`
  position: relative;
  margin-right: 10px;

  @media (min-width: ${SCREENS.MD}) {
    margin-right: 20px;
  }

  span {
    position: absolute;
    display: none;
    top: 0;
    right: 20px;
    color: #9d9d9d;
    font-size: 12px;
    @media (min-width: ${SCREENS.MD}) {
      display: block;
    }
  }

  .primary-logo {
    width: 180px;
    height: 40px;
    display: none;
    @media (min-width: ${SCREENS.MD}) {
      display: block;
    }
  }

  .secondary-logo {
    width: 60px;
    height: 40px;
    background-color: red;
    display: block;
    @media (min-width: ${SCREENS.MD}) {
      display: none;
    }
  }
`;
