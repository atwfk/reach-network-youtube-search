import { IGetSearchRes } from "../../../SearchPage/api/getSearchRes/IGetSearchRes";
import { ESearchKind } from "../../types/searchData/ESearchTypes";

export const searchSnippets: IGetSearchRes.ISearchItemApi[] = [
  {
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
    }
  },
  {
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
    }
  },
  {
    kind: "youtube#searchResult",
    etag: "DaK2Ba_18LTRdEalejgkB_QtFz8",
    id: {
      kind: ESearchKind.CHANNEL,
      channelId: "UCW5YeuERMmlnqo4oq8vwUpg"
    },
    snippet: {
      publishedAt: "2015-04-08T20:11:22Z",
      channelId: "UCW5YeuERMmlnqo4oq8vwUpg",
      title: "The Net Ninja",
      description:
        "Black-belt your web development skills. Over 1000 free programming tutorials about: - Modern JavaScript (beginner to advanced) ...",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s88-c-k-c0xffffffff-no-rj-mo"
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s240-c-k-c0xffffffff-no-rj-mo"
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s800-c-k-c0xffffffff-no-rj-mo"
        }
      },
      channelTitle: "The Net Ninja",
      liveBroadcastContent: "upcoming",
      publishTime: "2015-04-08T20:11:22Z"
    }
  }
];

export const videoListSnippets: IGetSearchRes.ISearchItemApi[] = [
  {
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
    }
  }
];
