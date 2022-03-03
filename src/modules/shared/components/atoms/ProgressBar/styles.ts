import styled from "styled-components";

export const StyledProgress = styled.div`
  width: 100%;
  height: 4px;
  background-color: #767272;
  z-index: 7;
  position: absolute;
  top: 0;

  .progress-bar {
    height: 100%;
    width: 0%;
    background: red;
    top: 0;
    position: absolute;
    animation: loader 2s;
    animation-iteration-count: infinite;
    transition-timing-function: linear;
  }

  @keyframes loader {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
