import { API_KEY } from "../../../shared/api";
import { getApis } from "../../../shared/api/network/getApis/getApis";
import { IError } from "../../../shared/types/IError";
import { IGetMoreSearchDetails } from "./IGetMoreSearchDetails";

export type ApisRes = [
  IGetMoreSearchDetails.IVideoResApi,
  IGetMoreSearchDetails.IChannelResApi,
  IGetMoreSearchDetails.IPlayListResApi
];

type GetMoreSearchDetails = {
  videosId: string;
  channelsId: string;
  playlistsId: string;
};

export const getMoreSearchDetails = async ({
  videosId,
  channelsId,
  playlistsId
}: GetMoreSearchDetails): Promise<ApisRes | IError.IErrorData> => {
  const endPoints = [
    `/videos?part=contentDetails, statistics&key=${API_KEY}&id=${videosId}`,
    `/channels?part=statistics&key=${API_KEY}&id=${channelsId}`,
    `/playlists?part=contentDetails&key=${API_KEY}&id=${playlistsId}`
  ];

  return getApis<ApisRes, ApisRes, IError.IErrorData>(
    endPoints,
    // @ts-expect-error Type 'ApisRes[]' is not assignable to type 'ApisRes'
    (responses) => {
      const data = responses.map((response) => response.data);

      return data;
    },
    (err) => {
      const { message, errorCode, isError, errors } = err;

      throw Object.assign(new Error(), { isError, message, errorCode, errors });
    }
  );
};
