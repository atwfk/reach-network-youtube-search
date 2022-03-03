import React from "react";
import type { FC, ReactElement } from "react";
import { BsFilter } from "react-icons/bs";
import { StyledFilter } from "./styles";

const Filter: FC = (): ReactElement => {
  return (
    <StyledFilter type="button">
      <BsFilter className="filter-icon" />
      FILTER
    </StyledFilter>
  );
};

export default Filter;
