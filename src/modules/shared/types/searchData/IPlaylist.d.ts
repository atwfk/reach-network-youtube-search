import { ESearchKind } from "./ESearchTypes";
import { IData } from "./IData";

export interface IPlaylist {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: ESearchKind.PLAYLIST;
    playlistId: string;
  };
  snippet: IData.ISnippet;
  contentDetails: IData.IPlaylistContentDetails;
}
