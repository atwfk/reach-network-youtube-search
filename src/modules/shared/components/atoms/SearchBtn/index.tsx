import React from "react";
import type { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledSearchButton } from "./styles";

const SearchBtn: FC<{ type: "button" | "submit" | "reset" | undefined; disabled?: boolean }> = ({
  type,
  disabled
}): ReactElement => {
  return (
    <StyledSearchButton type={type} disabled={disabled} data-testid="search-btn">
      <AiOutlineSearch className="search-icon" />
    </StyledSearchButton>
  );
};

export default SearchBtn;
