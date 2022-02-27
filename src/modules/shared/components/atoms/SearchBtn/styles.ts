import styled from "styled-components";
import { SCREENS } from "../../../constants";

export const StyledSearchButton = styled.button`
  border: none;
  border-left: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media (min-width: ${SCREENS.MD}) {
    border: 1px solid #9d9d9d;
    padding: 0px 25px;
    opacity: ${(props) => props.disabled && 0.6};
    background-color: #eee;
  }

  .search-icon {
    color: #eee;
    font-size: 20px;
    opacity: ${(props) => props.disabled && 0.6};
    margin-left: 10px;

    @media (min-width: ${SCREENS.MD}) {
      color: #9d9d9d;
      margin: 0;
    }
  }
`;
