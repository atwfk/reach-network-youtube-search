import React from "react";
import type { FC, ReactElement } from "react";
import { IChannelImage } from "./IChannelImage";
import { StyledImageContainer } from "./styles";

const ChannelImage: FC<IChannelImage.IProps> = ({ src, alt, width, height }): ReactElement => {
  return (
    <StyledImageContainer className="image-container">
      <div className="image-layer" style={{ width: `${width}px` }}>
        <img src={src} alt={alt} width={height} height={height} data-testid="channel-image" />
      </div>
    </StyledImageContainer>
  );
};

export default ChannelImage;
