import React from "react";
import type { FC, ReactElement } from "react";
import { ReactComponent as PrimaryLogo } from "../../icons/primary-logo.svg";
import { ReactComponent as SecondaryLogo } from "../../icons/secondary-logo.svg";
import { StyledLogo } from "./styles";

const Logo: FC = (): ReactElement => {
  return (
    <StyledLogo>
      <span>EG</span>
      <PrimaryLogo className="primary-logo" />
      <SecondaryLogo className="secondary-logo" />
    </StyledLogo>
  );
};

export default Logo;
