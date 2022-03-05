import React, { memo } from "react";
import type { FC, ReactElement } from "react";
import ItemDetails from "../ItemDetails";
import ImageLayer from "../ImageLayer";
import { useMedia } from "../../../hooks/useMedia";
import { SCREENS } from "../../../constants";
import { IPlaylist } from "../../../types/searchData/IPlaylist";

const Playlist: FC<{ playlist: IPlaylist }> = ({ playlist }): ReactElement => {
  const matched = useMedia(`(max-width: ${SCREENS.SM})`);

  const imageWidth = matched
    ? playlist.snippet.thumbnails.default.width
    : playlist.snippet.thumbnails.medium.width;
  const imageHeight = matched
    ? playlist.snippet.thumbnails.default.height
    : playlist.snippet.thumbnails.medium.height;

  const stats = [playlist.snippet.channelTitle];

  return (
    <li className="search-item">
      <ImageLayer
        alt={playlist.snippet.title}
        width={`${imageWidth}`}
        height={`${imageHeight}`}
        src={playlist.snippet.thumbnails.medium.url}
        playlistCount={playlist.contentDetails.itemCount}
      />
      <ItemDetails
        description={playlist.snippet.description}
        stats={stats}
        title={playlist.snippet.title}
      />
    </li>
  );
};

export default memo(Playlist);
