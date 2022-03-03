import React from "react";
import type { FC, ReactElement } from "react";
import TotalResults from "../TotalResults";
import Filter from "../Filter";
import { StyledSearchHeader } from "./styles";

const SearchHeader: FC<{ totalResults: number }> = ({ totalResults }): ReactElement => {
  return (
    <StyledSearchHeader>
      <TotalResults totalResults={totalResults} />
      <Filter />
    </StyledSearchHeader>
  );
};

export default SearchHeader;
