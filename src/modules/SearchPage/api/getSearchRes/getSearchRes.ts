import { API_KEY } from "../../../shared/api";
import { getApi } from "../../../shared/api/network/getApi/getApi";
import { VIDEOS_LIMITS } from "../../../shared/constants";
import { IError } from "../../../shared/types/IError";
import { IGetSearchRes } from "./IGetSearchRes";

export const getSearchRes = async ({
  query
}: {
  query: string;
}): Promise<IGetSearchRes.IResApi | IError.IErrorData> => {
  return getApi<IGetSearchRes.IResApi, IGetSearchRes.IResApi, IError.IErrorData>(
    `/search?part=snippet&key=${API_KEY}&q=${query}&maxResults=${VIDEOS_LIMITS}`,
    (response) => {
      const { data } = response;

      return data;
    },
    (err) => {
      const { message, errorCode, isError, errors } = err;

      throw Object.assign(new Error(), { isError, message, errorCode, errors });
    }
  );
};
