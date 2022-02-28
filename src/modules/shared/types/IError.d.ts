declare namespace IError {
  export interface IErrorData {
    message: string;
    errors: IErrorsData | null;
    isError: boolean;
    errorCode: number;
  }

  export interface IErrorResponse {
    response: { statusText: string; status: number; data: IErrorResData };
  }

  export interface IErrorResData {
    error: {
      code: number;
      message: string;
      errors: IErrorsData[];
    };
  }

  export interface IErrorsData {
    message: string;
    domain: string;
    reason: string;
    location: string;
    locationType: string;
  }
}

export { IError };
