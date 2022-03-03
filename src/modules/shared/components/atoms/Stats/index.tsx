import React from "react";
import type { FC, ReactElement } from "react";
import { StyledStats } from "./styles";

const Stats: FC<{ stats: string[] }> = ({ stats }): ReactElement => {
  return (
    <StyledStats className="stats">
      {stats.map((stat, index, items) => (
        <li key={stat} data-testid="stat">
          {stat} {items.length !== index + 1 && <span className="separator"></span>}
        </li>
      ))}
    </StyledStats>
  );
};

export default Stats;
