declare namespace IGetMoreSearchDetails {
  export interface IVideoDetailsApi {
    kind: "youtube#video";
    etag: string;
    id: string;
    contentDetails: {
      duration: string;
      dimension: "2d" | "3d";
      definition: "hd" | "sd";
      caption: string;
      licensedContent: boolean;
      contentRating: Record<string, string>;
      projection: string;
    };
    statistics: {
      viewCount: string;
      likeCount: string;
      favoriteCount: string;
      commentCount: string;
    };
  }

  export interface IChannelDetailsApi {
    kind: "youtube#channel";
    etag: string;
    id: string;
    statistics: {
      viewCount: string;
      subscriberCount: string;
      hiddenSubscriberCount: boolean;
      videoCount: string;
    };
  }

  export interface IPlayListDetailsApi {
    kind: "youtube#playlist";
    etag: string;
    id: string;
    contentDetails: {
      itemCount: number;
    };
  }

  export interface IVideoResApi {
    kind: "youtube#videoListResponse";
    etag: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: IVideoDetailsApi[];
  }

  export interface IChannelResApi {
    kind: "youtube#channelListResponse";
    etag: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: IChannelDetailsApi[];
  }

  export interface IPlayListResApi {
    kind: "youtube#playlistListResponse";
    etag: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: IPlayListDetailsApi[];
  }
}

export { IGetMoreSearchDetails };
