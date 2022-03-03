import React from "react";
import type { FC, ReactElement } from "react";
import { formatNumberWithCommas } from "../../../shared/logic/transformIntNum/transformIntNum";
import { StyledSearchResults } from "./styles";

const TotalResults: FC<{ totalResults: number }> = ({ totalResults }): ReactElement => {
  return (
    <StyledSearchResults>
      About {formatNumberWithCommas(totalResults)} filtered results
    </StyledSearchResults>
  );
};

export default TotalResults;
