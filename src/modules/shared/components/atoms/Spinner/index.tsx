import React from "react";
import type { FC, ReactElement } from "react";
import { StyledSpinner } from "./styles";

const Spinner: FC = (): ReactElement => {
  return (
    <StyledSpinner>
      <div className="spinner" />
    </StyledSpinner>
  );
};

export default Spinner;
