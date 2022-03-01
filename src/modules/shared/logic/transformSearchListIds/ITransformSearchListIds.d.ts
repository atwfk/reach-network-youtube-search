export type FilterSearchListByKind = {
  searchList: IGetSearchRes.ISearchItemApi[];
  searchKind: ESearchKind;
};

export type GetSearchListIds = {
  searchList: IGetSearchRes.ISearchItemApi[];
  keyId: "videoId" | "channelId" | "playlistId";
};
