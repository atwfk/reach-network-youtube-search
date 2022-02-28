import { IData } from "./IData";

export interface IChannel {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: "youtube#channel";
    channelId: string;
  };
  snippet: IData.ISnippet;
  statistics: IData.IChannelStatistics;
}
