import axios from "axios";
import api from "../../../shared/api/";
import { getMoreSearchDetails } from "./getMoreSearchDetails";

jest.mock("../../../shared/api/");

const mockedApi = api as jest.Mocked<typeof axios>;

describe("getMoreSearchDetails", () => {
  it("should return array of products in success case", async () => {
    const requests = [
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

    mockedApi.get
      .mockImplementationOnce(() => Promise.resolve(requests[0]))
      .mockImplementationOnce(() => Promise.resolve(requests[1]))
      .mockImplementationOnce(() => Promise.resolve(requests[2]));

    const response = await getMoreSearchDetails({
      videosId: "2,1",
      channelsId: "3,5",
      playlistsId: "0,4"
    });

    const results = [{ name: "ahmed" }, { name: "omar" }, { name: "ali" }];

    expect(JSON.stringify(response)).toEqual(JSON.stringify(results));
  });

  it("Should reject network error if there's not a response came from axios", async () => {
    mockedApi.get.mockRejectedValue({ message: "Network Error" });

    try {
      await getMoreSearchDetails({
        videosId: "2,1",
        channelsId: "3,5",
        playlistsId: "0,4"
      });
    } catch (error: unknown) {
      const expectedData = {
        isError: true,
        message: "network error",
        errorCode: 500,
        errors: null
      };

      expect(JSON.stringify(error)).toEqual(JSON.stringify(expectedData));
    }
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

    try {
      await getMoreSearchDetails({
        videosId: "2,1",
        channelsId: "3,5",
        playlistsId: "0,4"
      });
    } catch (error: unknown) {
      const expectedData = {
        isError: true,
        message: "not found",
        errorCode: 404,
        errors: { message: "client error", reason: "not found" }
      };

      expect(JSON.stringify(error)).toEqual(JSON.stringify(expectedData));
    }
  });
});
