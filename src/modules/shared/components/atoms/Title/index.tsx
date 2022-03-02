import React from "react";
import type { FC, ReactElement } from "react";
import { StyledTitle } from "./styles";

const Title: FC<{ title: string }> = ({ title }): ReactElement => {
  return (
    <StyledTitle className="title" title={title}>
      {title}
    </StyledTitle>
  );
};

export default Title;
