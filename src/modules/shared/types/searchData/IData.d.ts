import { IChannel } from "./IChannel";
import { IPlaylist } from "./IPlaylist";
import { IVideo } from "./IVideo";

declare namespace IData {
  export interface IMainData {
    kind: "youtube#searchListResponse";
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: IVideo[] | IPlaylist[] | IChannel[];
  }

  export interface IThumbnail {
    url: string;
    width?: number;
    height?: number;
  }

  export interface ISnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: IData.IThumbnail;
      medium: IData.IThumbnail;
      high: IData.IThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: "none" | "upcoming" | "live";
    publishTime: string;
  }

  export interface IVideoContentDetails {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    contentRating: Record<string, string>;
    projection: "rectangular";
  }

  export interface IPlaylistContentDetails {
    itemCount: number;
  }

  export interface IVideoStatistics {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  }

  export interface IChannelStatistics {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  }
}

export { IData };
