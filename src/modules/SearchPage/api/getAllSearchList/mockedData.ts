import { ESearchKind } from "../../../shared/types/searchData/ESearchTypes";

export const searchSnippets = {
  kind: "youtube#searchListResponse",
  etag: "cq-FulckYwkJSxhhTc36gDsy08I",
  nextPageToken: "CAQQAA",
  regionCode: "EG",
  pageInfo: {
    totalResults: 130271,
    resultsPerPage: 4
  },
  items: [
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
  ]
};

export const videosDetails = {
  kind: "youtube#videoListResponse",
  etag: "LCe9v7CUt-SuSX3S0rJP8uCXCBQ",
  items: [
    {
      kind: "youtube#video",
      etag: "msuimHP7LRNROTpHpnf5cIf0o54",
      id: "31ieHmcTUOk",
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
    }
  ],
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 1
  }
};

export const channelsDetails = {
  kind: "youtube#channelListResponse",
  etag: "jojclOwdRwd6dqw0biGj7v__w_I",
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5
  },
  items: [
    {
      kind: "youtube#channel",
      etag: "kaUmGaqakxiMrsi5xZ0EzckBdjE",
      id: "UCW5YeuERMmlnqo4oq8vwUpg",
      statistics: {
        viewCount: "107815470",
        subscriberCount: "888000",
        hiddenSubscriberCount: false,
        videoCount: "1786"
      }
    }
  ]
};

export const playlistDetails = {
  kind: "youtube#playlistListResponse",
  etag: "hOK357ce3wgzUysljdKnhqxXUBA",
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5
  },
  items: [
    {
      kind: "youtube#playlist",
      etag: "weNBrdoqrxkB99DJCnYttpXH6UQ",
      id: "PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7",
      contentDetails: {
        itemCount: 13
      }
    }
  ]
};

export const requests = [
  {
    data: searchSnippets,
    status: 200,
    statusText: "ok",
    headers: "any",
    config: {}
  },
  {
    data: videosDetails,
    status: 200,
    statusText: "ok",
    headers: "any",
    config: {}
  },
  {
    data: channelsDetails,
    status: 200,
    statusText: "ok",
    headers: "any",
    config: {}
  },
  {
    data: playlistDetails,
    status: 200,
    statusText: "ok",
    headers: "any",
    config: {}
  }
];

export const results = {
  kind: "youtube#searchListResponse",
  etag: "cq-FulckYwkJSxhhTc36gDsy08I",
  nextPageToken: "CAQQAA",
  regionCode: "EG",
  pageInfo: {
    totalResults: 130271,
    resultsPerPage: 4
  },
  items: [
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
      },
      contentDetails: {
        itemCount: 13
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
      },
      statistics: {
        viewCount: "107815470",
        subscriberCount: "888000",
        hiddenSubscriberCount: false,
        videoCount: "1786"
      }
    }
  ]
};
