import styled from "styled-components";
import { SCREENS } from "../../../constants";

export const StyledItemDetails = styled.div`
  .title {
    margin-bottom: 4px;

    @media (max-width: ${SCREENS.SM}) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 200px;
    }
  }

  .stats {
    @media (min-width: ${SCREENS.SM}) {
      margin-bottom: 10px;
    }
  }

  .description {
    display: none;
    @media (min-width: ${SCREENS.SM}) {
      display: block;
    }
  }
`;
