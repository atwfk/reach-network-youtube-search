import { IData } from "./IData";

export interface IPlaylist {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: "youtube#playlist";
    playlistId: string;
  };
  snippet: IData.ISnippet;
  contentDetails: IData.IPlaylistContentDetails;
}
