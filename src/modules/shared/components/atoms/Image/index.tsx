import React from "react";
import type { FC, ReactElement } from "react";
import { IImage } from "./IImage";
import classNames from "classnames";
import { StyledImageContainer } from "./styles";

const Image: FC<IImage.IProps> = ({ src, alt, width, height, isChannel }): ReactElement => {
  const imageClasses = classNames({ channel: isChannel });

  return (
    <StyledImageContainer>
      <img src={src} alt={alt} width={width} height={height} className={imageClasses} />
    </StyledImageContainer>
  );
};

export default Image;
