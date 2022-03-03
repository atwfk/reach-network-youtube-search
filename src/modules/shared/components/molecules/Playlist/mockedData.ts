import { ESearchKind } from "./../../../types/searchData/ESearchTypes";
import { IPlaylist } from "./../../../types/searchData/IPlaylist.d";

export const playlist: IPlaylist = {
  kind: "youtube#searchResult",
  etag: "j6JOcITqmoiyuUdw0HMnro1nmWQ",
  id: {
    kind: ESearchKind.PLAYLIST,
    playlistId: "PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7"
  },
  snippet: {
    publishedAt: "2022-02-02T11:17:01Z",
    channelId: "UCW5YeuERMmlnqo4oq8vwUpg",
    title: "Docker Crash Course Tutorial",
    description: "",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/31ieHmcTUOk/default.jpg",
        width: 120,
        height: 90
      },
      medium: {
        url: "https://i.ytimg.com/vi/31ieHmcTUOk/mqdefault.jpg",
        width: 320,
        height: 180
      },
      high: {
        url: "https://i.ytimg.com/vi/31ieHmcTUOk/hqdefault.jpg",
        width: 480,
        height: 360
      }
    },
    channelTitle: "The Net Ninja",
    liveBroadcastContent: "none",
    publishTime: "2022-02-02T11:17:01Z"
  },
  contentDetails: {
    itemCount: 13
  }
};
