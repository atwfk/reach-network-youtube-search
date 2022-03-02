import React from "react";
import type { FC, ReactElement } from "react";
import { IVideo } from "../../../types/searchData/IVideo";
import ItemDetails from "../ItemDetails";
import { convertVideoDuration, humanReadableDate } from "../../../logic/formateDate/formateDate";
import { transformIntNum } from "../../../logic/transformIntNum/transformIntNum";
import ImageLayer from "../ImageLayer";
import { useMedia } from "../../../hooks/useMedia";
import { SCREENS } from "../../../constants";

const Video: FC<{ video: IVideo }> = ({ video }): ReactElement => {
  const matched = useMedia(`(max-width: ${SCREENS.SM})`);

  const imageWidth = matched
    ? video.snippet.thumbnails.default.width
    : video.snippet.thumbnails.medium.width;
  const imageHeight = matched
    ? video.snippet.thumbnails.default.height
    : video.snippet.thumbnails.medium.height;

  const stats = [
    video.snippet.channelTitle,
    `${transformIntNum(video.statistics.viewCount)} views`
  ];

  return (
    <li className="search-item">
      <ImageLayer
        alt={video.snippet.title}
        width={`${imageWidth}`}
        height={`${imageHeight}`}
        src={video.snippet.thumbnails.medium.url}
        duration={convertVideoDuration(video.contentDetails.duration)}
      />
      <ItemDetails
        description={video.snippet.description}
        stats={matched ? stats : [...stats, humanReadableDate(video.snippet.publishedAt)]}
        title={video.snippet.title}
      />
    </li>
  );
};

export default Video;
