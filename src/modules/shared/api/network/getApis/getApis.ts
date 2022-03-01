import api from "../../.";
import axios from "axios";
import type { AxiosResponse } from "axios";
import { IError } from "../../../types/IError";

export const getApis = async <T, X, Y>(
  endPoints: string[],
  onSuccess: (successData: AxiosResponse<T>[]) => X,
  onError: (errorData: IError.IErrorData) => Y,
  onFinished?: () => void
): Promise<X | Y> => {
  try {
    const responses = await axios.all(endPoints.map((endPoint) => api.get(endPoint)));

    return onSuccess(responses);
  } catch (err: unknown) {
    const { response } = err as IError.IErrorResponse;

    if (!response) {
      return onError({
        isError: true,
        message: "network error",
        errors: null,
        errorCode: 500
      });
    }

    const { errors, code } = response.data.error;

    return onError({
      isError: true,
      errors: errors[0],
      message: errors[0].message,
      errorCode: code
    });
  } finally {
    onFinished?.();
  }
};
