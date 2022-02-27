import styled from "styled-components";
import { SCREENS } from "../../../constants";

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #9d9d9d;
    font-size: 16px;
    outline: none;
    border-radius: 2px;
    :focus {
      border-color: #3ea6ff;
    }

    @media (min-width: ${SCREENS.MD}) {
      padding: 10px;
    }
  }

  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    cursor: pointer;

    @media (min-width: ${SCREENS.MD}) {
      right: 20px;
    }
  }
  .remove-text {
    color: #9d9d9d;
  }
`;
