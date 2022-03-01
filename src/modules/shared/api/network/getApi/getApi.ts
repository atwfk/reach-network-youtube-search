import api from "../../.";
import type { AxiosResponse } from "axios";
import { IError } from "../../../types/IError";

export const getApi = async <T, X, Y>(
  endPoint: string,
  onSuccess: (successData: AxiosResponse<T>) => X,
  onError: (errorData: IError.IErrorData) => Y,
  onFinished?: () => void
): Promise<X | Y> => {
  try {
    const response = await api.get(endPoint);

    return onSuccess(response);
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
      message: errors[0].reason,
      errorCode: code
    });
  } finally {
    onFinished?.();
  }
};
