import React from "react";
import type { FC, ReactElement } from "react";
import { IImage } from "./IImage";

const Image: FC<IImage.IProps> = ({ src, alt, width, height }): ReactElement => {
  return <img src={src} alt={alt} width={width} height={height} data-testid="image" />;
};

export default Image;
