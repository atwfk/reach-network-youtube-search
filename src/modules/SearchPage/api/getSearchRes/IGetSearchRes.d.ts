import { ESearchKind } from "../../../shared/types/searchData/ESearchTypes";

declare namespace IGetSearchRes {
  export interface IThumbnail {
    url: string;
    width?: number;
    height?: number;
  }

  export interface ISearchItemApi {
    kind: "youtube#searchResult";
    etag: string;
    id: {
      kind: ESearchKind;
      videoId?: string;
      playlistId?: string;
      channelId?: string;
    };
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: IThumbnail;
        medium: IThumbnail;
        high: IThumbnail;
      };
      channelTitle: string;
      liveBroadcastContent: "none" | "upcoming" | "live";
      publishTime: string;
    };
  }

  export interface IResApi {
    kind: "youtube#searchListResponse";
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: ISearchItemApi[];
  }
}

export { IGetSearchRes };
