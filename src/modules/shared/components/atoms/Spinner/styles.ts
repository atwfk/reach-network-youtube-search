import styled from "styled-components";

export const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    font-size: 50px;
    animation: spinnerLoader 2s;
    animation-iteration-count: infinite;
    transition-timing-function: ease;
    color: #767272;
  }

  @keyframes spinnerLoader {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
