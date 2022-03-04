import { IError } from "./../../../shared/types/IError";
import {
  addAllSearchListDetails,
  transformSearchListDetails
} from "./../../../shared/logic/addAllSearchListDetails/addAllSearchListDetails";
import { ApisRes, getMoreSearchDetails } from "./../getMoreSearchDetails/getMoreSearchDetails";
import { transformSearchListIds } from "./../../../shared/logic/transformSearchListIds/transformSearchListIds";
import { getSearchRes } from "../getSearchRes/getSearchRes";
import { IGetSearchRes } from "../getSearchRes/IGetSearchRes";
import { IData } from "../../../shared/types/searchData/IData";

type GetAllSearchList = {
  query: string;
  nextPageToken?: string;
};

export const getAllSearchList = async ({
  query,
  nextPageToken
}: GetAllSearchList): Promise<IData.IMainData | IError.IErrorData> => {
  try {
    const searchSnippets = (await getSearchRes({ query, nextPageToken })) as IGetSearchRes.IResApi;

    const [videosId, channelsId, playlistsId] = transformSearchListIds(searchSnippets.items);

    const searchListDetails = (await getMoreSearchDetails({
      channelsId,
      videosId,
      playlistsId
    })) as ApisRes;

    const transformedSearchListDetails = transformSearchListDetails({
      videos: searchListDetails[0],
      channels: searchListDetails[1],
      playlists: searchListDetails[2]
    });

    const searchListDetailsRes = addAllSearchListDetails({
      searchData: searchSnippets,
      searchListDetails: transformedSearchListDetails
    });

    return searchListDetailsRes;
  } catch (err: unknown) {
    const { message, errorCode, isError, errors } = err as IError.IErrorData;

    throw Object.assign(new Error(), { isError, message, errorCode, errors });
  }
};
