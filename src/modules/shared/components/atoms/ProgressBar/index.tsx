import React from "react";
import type { FC, ReactElement } from "react";
import { StyledProgress } from "./styles";

const ProgressBar: FC = (): ReactElement => {
  return (
    <StyledProgress>
      <div className="progress-bar" />
    </StyledProgress>
  );
};

export default ProgressBar;
