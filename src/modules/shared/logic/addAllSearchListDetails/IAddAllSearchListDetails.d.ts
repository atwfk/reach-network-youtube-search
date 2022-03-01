import { IGetMoreSearchDetails } from "../../../SearchPage/api/getMoreSearchDetails/IGetMoreSearchDetails";
import { IGetSearchRes } from "../../../SearchPage/api/getSearchRes/IGetSearchRes";

export type TransformSearchListDetails = {
  videos: IGetMoreSearchDetails.IVideoResApi;
  channels: IGetMoreSearchDetails.IChannelResApi;
  playlists: IGetMoreSearchDetails.IPlayListResApi;
};

export type AddAllSearchListDetails = {
  searchData: IGetSearchRes.IResApi;
  searchListDetails: Map<
    string,
    | IGetMoreSearchDetails.IVideoDetailsApi
    | IGetMoreSearchDetails.IChannelDetailsApi
    | IGetMoreSearchDetails.IPlayListDetailsApi
  >;
};
