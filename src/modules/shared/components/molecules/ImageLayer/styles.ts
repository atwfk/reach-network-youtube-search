import styled from "styled-components";

export const StyledImageLayer = styled.div`
  position: relative;
  color: #f1f0f0;

  .duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1px;
  }

  .playlist-count {
    position: absolute;
    top: 1px;
    right: 0;
    width: 40%;
    height: 97%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .playlist-icon {
      font-size: 25px;
      margin-top: 6px;
    }
  }
`;
