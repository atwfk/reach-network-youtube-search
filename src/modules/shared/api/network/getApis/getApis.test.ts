import axios from "axios";
import api from "../../.";
import { getApis } from "./getApis";

jest.mock("../../.");

const mockedApi = api as jest.Mocked<typeof axios>;

describe("getApis", () => {
  it("should return success function with array of requested data in success case", async () => {
    const request = [
      {
        data: { name: "ahmed" },
        status: 200,
        statusText: "ok",
        headers: "any",
        config: {}
      },
      {
        data: { name: "omar" },
        status: 200,
        statusText: "ok",
        headers: "any",
        config: {}
      },
      {
        data: { name: "ali" },
        status: 200,
        statusText: "ok",
        headers: "any",
        config: {}
      }
    ];

    mockedApi.get.mockResolvedValue(request);

    const response = await getApis(
      ["endpoint/1", "endpoint/2", "endpoint/3"],
      (res) => res,
      () => {}
    );

    const results = [request, request, request];

    expect(JSON.stringify(response)).toEqual(JSON.stringify(results));
  });

  it("Should reject Network Error if there's not a response came from axios", async () => {
    mockedApi.get.mockRejectedValue({ message: "network error" });

    const response = await getApis(
      ["endpoint/1", "endpoint/2", "endpoint/3"],
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

    const response = await getApis(
      ["endpoint/1", "endpoint/2", "endpoint/3"],
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
