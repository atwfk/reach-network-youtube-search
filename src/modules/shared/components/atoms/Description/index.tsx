import React from "react";
import type { FC, ReactElement } from "react";
import { StyledDescription } from "./styles";

const Description: FC<{ description: string }> = ({ description }): ReactElement => {
  return <StyledDescription className="description">{description}</StyledDescription>;
};

export default Description;
