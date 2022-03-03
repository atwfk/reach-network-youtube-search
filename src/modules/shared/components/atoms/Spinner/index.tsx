import React from "react";
import type { FC, ReactElement } from "react";
import { FaSpinner } from "react-icons/fa";
import { StyledSpinner } from "./styles";

const Spinner: FC = (): ReactElement => {
  return (
    <StyledSpinner>
      <FaSpinner className="spinner" />
    </StyledSpinner>
  );
};

export default Spinner;
