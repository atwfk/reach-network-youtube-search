import React, { memo } from "react";
import type { FC, ReactElement } from "react";
import ItemDetails from "../ItemDetails";
import { formateIntNum } from "../../../logic/transformIntNum/transformIntNum";
import { useMedia } from "../../../hooks/useMedia";
import { SCREENS } from "../../../constants";
import { IChannel } from "../../../types/searchData/IChannel";
import ChannelImage from "../../atoms/ChannelImage";

const Channel: FC<{ channel: IChannel }> = ({ channel }): ReactElement => {
  const matched = useMedia(`(max-width: ${SCREENS.SM})`);

  const imageWidth = matched ? 120 : 320;
  const imageHeight = matched ? 90 : 180;

  const stats = [
    `${formateIntNum(channel.statistics.subscriberCount)} subscribers`,
    `${formateIntNum(channel.statistics.videoCount)} videos`
  ];

  return (
    <li className="search-item">
      <ChannelImage
        alt={channel.snippet.title}
        width={`${imageWidth}`}
        height={`${imageHeight}`}
        src={channel.snippet.thumbnails.medium.url}
      />
      <ItemDetails
        description={channel.snippet.description}
        stats={stats}
        title={channel.snippet.title}
      />
    </li>
  );
};

export default memo(Channel);
