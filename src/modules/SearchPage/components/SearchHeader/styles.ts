import styled from "styled-components";
import { SCREENS } from "../../../shared/constants";

export const StyledSearchHeader = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 20px;

  @media (min-width: ${SCREENS.MD}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
