import React from "react";
import type { FC, ReactElement } from "react";
import Logo from "../../atoms/Logo";
import SearchForm from "../SearchForm";
import { StyledNav } from "./styles";

const Navbar: FC = (): ReactElement => {
  return (
    <StyledNav>
      <div className="nav-container">
        <Logo />
        <SearchForm />
      </div>
    </StyledNav>
  );
};

export default Navbar;
