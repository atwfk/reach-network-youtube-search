import React from "react";
import type { FC, ReactElement } from "react";
import Logo from "../../atoms/Logo";
import SearchForm from "../SearchForm";
import { StyledNav } from "./styles";
import { Link } from "react-router-dom";

const Navbar: FC = (): ReactElement => {
  return (
    <StyledNav>
      <div className="nav-container">
        <Link to="/">
          <Logo />
        </Link>
        <SearchForm />
      </div>
    </StyledNav>
  );
};

export default Navbar;
