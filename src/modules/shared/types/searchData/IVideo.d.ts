import { ESearchKind } from "./ESearchTypes";
import { IData } from "./IData";

export interface IVideo {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: ESearchKind.VIDEO;
    videoId: string;
  };
  snippet: IData.ISnippet;
  contentDetails: IData.IVideoContentDetails;
  statistics: IData.IVideoStatistics;
}
