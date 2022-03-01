import { IGetSearchRes } from "../../../SearchPage/api/getSearchRes/IGetSearchRes";
import { ESearchKind } from "../../types/searchData/ESearchTypes";
import { FilterSearchListByKind, GetSearchListIds } from "./ITransformSearchListIds";

export const filterSearchListByKind = ({
  searchList,
  searchKind
}: FilterSearchListByKind): IGetSearchRes.ISearchItemApi[] => {
  return searchList.filter((item) => item.id.kind === searchKind);
};

export const getSearchListIds = ({ searchList, keyId }: GetSearchListIds): string[] => {
  return searchList.map((video) => `${video.id[keyId]}`);
};

export const createCommaSeparatedList = (ids: string[]): string => {
  return ids.reduce((acc, curr) => `${acc},${curr}`, "");
};

export const transformSearchListIds = (searchList: IGetSearchRes.ISearchItemApi[]): string[] => {
  const filteredVideos = filterSearchListByKind({ searchList, searchKind: ESearchKind.VIDEO });
  const videosId = getSearchListIds({ searchList: filteredVideos, keyId: "videoId" });

  const filteredChannels = filterSearchListByKind({ searchList, searchKind: ESearchKind.CHANNEL });
  const channelsId = getSearchListIds({ searchList: filteredChannels, keyId: "channelId" });

  const filteredPlaylists = filterSearchListByKind({
    searchList,
    searchKind: ESearchKind.PLAYLIST
  });
  const playlistsId = getSearchListIds({ searchList: filteredPlaylists, keyId: "playlistId" });

  const commaSeparatedVidIds = createCommaSeparatedList(videosId);
  const commaSeparatedChanIds = createCommaSeparatedList(channelsId);
  const commaSeparatedPLIds = createCommaSeparatedList(playlistsId);

  return [commaSeparatedVidIds, commaSeparatedChanIds, commaSeparatedPLIds];
};
