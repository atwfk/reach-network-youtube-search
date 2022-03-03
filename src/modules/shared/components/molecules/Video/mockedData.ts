import { IVideo } from "./../../../types/searchData/IVideo.d";
import { ESearchKind } from "../../../types/searchData/ESearchTypes";

export const video: IVideo = {
  kind: "youtube#searchResult",
  etag: "oA75fNAhg8Y-flV-P_Kv-q6QjHI",
  id: {
    kind: ESearchKind.VIDEO,
    videoId: "31ieHmcTUOk"
  },
  snippet: {
    publishedAt: "2022-02-02T11:22:44Z",
    channelId: "UCW5YeuERMmlnqo4oq8vwUpg",
    title: "Docker Crash Course #1 - What is Docker?",
    description:
      "Hey gang, in this Docker tutorial series you'll learn what Docker is & how to use it to help improve the development experience ...",
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
    publishTime: "2022-02-02T11:22:44Z"
  },
  contentDetails: {
    duration: "PT7M26S",
    dimension: "2d",
    definition: "hd",
    caption: "false",
    licensedContent: true,
    contentRating: {},
    projection: "rectangular"
  },
  statistics: {
    viewCount: "23730",
    likeCount: "1336",
    favoriteCount: "0",
    commentCount: "138"
  }
};
