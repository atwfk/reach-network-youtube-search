import type {
  AddAllSearchListDetails,
  TransformSearchListDetails
} from "./IAddAllSearchListDetails.d";
import { IGetMoreSearchDetails } from "../../../SearchPage/api/getMoreSearchDetails/IGetMoreSearchDetails";
import { IData } from "../../types/searchData/IData";
import { IVideo } from "../../types/searchData/IVideo";
import { IChannel } from "../../types/searchData/IChannel";
import { IPlaylist } from "../../types/searchData/IPlaylist";

export const transformSearchListDetails = ({
  videos,
  channels,
  playlists
}: TransformSearchListDetails): Map<
  string,
  | IGetMoreSearchDetails.IVideoDetailsApi
  | IGetMoreSearchDetails.IChannelDetailsApi
  | IGetMoreSearchDetails.IPlayListDetailsApi
> => {
  const searchListDetails = [...videos.items, ...channels.items, ...playlists.items];

  const mapSearchList = new Map();

  searchListDetails.forEach((searchItemDetails) => {
    mapSearchList.set(searchItemDetails.id, searchItemDetails);
  });

  return mapSearchList;
};

export const addAllSearchListDetails = ({
  searchData,
  searchListDetails
}: AddAllSearchListDetails): IData.IMainData => {
  const searchListDetailsRes = searchData.items.map((searchItem) => {
    if (searchItem.id.videoId) {
      const videoDetails = searchListDetails.get(
        searchItem.id.videoId
      ) as IGetMoreSearchDetails.IVideoDetailsApi;

      return {
        ...searchItem,
        contentDetails: videoDetails.contentDetails,
        statistics: videoDetails.statistics
      };
    }

    if (searchItem.id.channelId) {
      const channelDetails = searchListDetails.get(
        searchItem.id.channelId
      ) as IGetMoreSearchDetails.IChannelDetailsApi;

      return {
        ...searchItem,
        statistics: channelDetails.statistics
      };
    }

    if (searchItem.id.playlistId) {
      const playlistDetails = searchListDetails.get(
        searchItem.id.playlistId
      ) as IGetMoreSearchDetails.IPlayListDetailsApi;

      return {
        ...searchItem,
        contentDetails: playlistDetails.contentDetails
      };
    }

    return;
  });

  return {
    ...searchData,
    items: searchListDetailsRes as IVideo[] | IPlaylist[] | IChannel[]
  };
};
