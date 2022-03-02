import styled from "styled-components";
import { SCREENS } from "../../../constants";

export const StyledNav = styled.nav`
  background-color: red;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  padding: 5px 20px;

  @media (min-width: ${SCREENS.MD}) {
    background-color: white;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .nav-container {
    max-width: ${SCREENS.LG};
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;
