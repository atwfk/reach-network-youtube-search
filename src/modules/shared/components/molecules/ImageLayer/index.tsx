import React from "react";
import type { FC, ReactElement } from "react";
import Image from "../../atoms/Image";
import { IImageLayer } from "./IImageLayer";
import { CgPlayList } from "react-icons/cg";
import { StyledImageLayer } from "./styles";

const ImageLayer: FC<IImageLayer.IProps> = ({
  src,
  alt,
  width,
  height,
  duration,
  playlistCount
}): ReactElement => {
  return (
    <StyledImageLayer className="image-container">
      <Image alt={alt} height={`${height}`} width={`${width}`} src={src} />
      {duration && (
        <span className="duration" data-testid="duration">
          {duration}
        </span>
      )}
      {playlistCount && (
        <span className="playlist-count" data-testid="playlist-count">
          {playlistCount}
          <CgPlayList className="playlist-icon" />
        </span>
      )}
    </StyledImageLayer>
  );
};

export default ImageLayer;
