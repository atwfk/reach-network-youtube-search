import React from "react";
import type { FC, ReactElement } from "react";
import Title from "../../atoms/Title";
import Stats from "../../atoms/Stats";
import Description from "../../atoms/Description";
import { StyledItemDetails } from "./styles";

const ItemDetails: FC<{ title: string; stats: string[]; description: string }> = ({
  title,
  stats,
  description
}): ReactElement => {
  return (
    <StyledItemDetails>
      <Title title={title} />
      <Stats stats={stats} />
      <Description description={description} />
    </StyledItemDetails>
  );
};

export default ItemDetails;
