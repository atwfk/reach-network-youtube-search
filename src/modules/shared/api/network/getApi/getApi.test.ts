import api from "../../.";
import { getApi } from "./getApi";

jest.mock("../../.");

const mockedApi = api as jest.Mocked<typeof api>;

describe("getApi", () => {
  it("should return success function with the requested data in success case", async () => {
    mockedApi.get.mockResolvedValue({
      data: { name: "ahmed" },
      status: 200,
      statusText: "ok",
      headers: "any",
      config: {}
    });

    const response = await getApi(
      `endpoint`,
      (res) => res,
      () => {}
    );

    const results = {
      data: { name: "ahmed" },
      status: 200,
      statusText: "ok",
      headers: "any",
      config: {}
    };

    expect(JSON.stringify(response)).toEqual(JSON.stringify(results));
  });

  it("Should reject Network Error if there's not a response cames from axios", async () => {
    mockedApi.get.mockRejectedValue({ message: "network error" });

    const response = await getApi(
      `endpoint`,
      () => {},
      (err) => err
    );

    const results = {
      isError: true,
      message: "network error",
      errors: null,
      errorCode: 500
    };

    expect(JSON.stringify(response)).toEqual(JSON.stringify(results));
  });

  it("Should reject Error object with custom message if client did recognized the status code", async () => {
    mockedApi.get.mockRejectedValue({
      response: {
        data: {
          error: {
            code: 404,
            errors: [
              {
                message: "client error",
                reason: "not found"
              }
            ]
          }
        }
      }
    });

    const response = await getApi(
      `endpoint`,
      () => {},
      (err) => err
    );

    const results = {
      isError: true,
      errors: { message: "client error", reason: "not found" },
      message: "not found",
      errorCode: 404
    };

    expect(JSON.stringify(response)).toEqual(JSON.stringify(results));
  });
});
