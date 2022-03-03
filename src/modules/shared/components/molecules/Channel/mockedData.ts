import { ESearchKind } from "./../../../types/searchData/ESearchTypes";
import { IChannel } from "./../../../types/searchData/IChannel.d";

export const channel: IChannel = {
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
};
