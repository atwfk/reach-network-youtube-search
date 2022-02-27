import styled from "styled-components";
import { SCREENS } from "../../../constants";

export const StyledNav = styled.nav`
  background-color: red;
  box-shadow: 0px 4px 4px #f1f2f3;
  padding: 5px 20px;

  @media (min-width: ${SCREENS.MD}) {
    background-color: white;
    padding: 10px 20px;
  }

  .nav-container {
    max-width: ${SCREENS.LG};
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;
