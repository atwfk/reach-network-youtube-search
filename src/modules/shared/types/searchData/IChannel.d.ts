import { ESearchKind } from "./ESearchTypes";
import { IData } from "./IData";

export interface IChannel {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: ESearchKind.CHANNEL;
    channelId: string;
  };
  snippet: IData.ISnippet;
  statistics: IData.IChannelStatistics;
}
