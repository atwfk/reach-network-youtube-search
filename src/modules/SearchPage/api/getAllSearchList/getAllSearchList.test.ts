import api from "../../../shared/api/";
import { getAllSearchList } from "./getAllSearchList";
import { requests, results } from "./mockedData";

jest.mock("../../../shared/api/");

const mockedApi = api as jest.Mocked<typeof api>;

describe("getAllSearchList", () => {
  it("should return array of requested search list in success case", async () => {
    mockedApi.get
      .mockImplementationOnce(() => Promise.resolve(requests[0]))
      .mockImplementationOnce(() => Promise.resolve(requests[1]))
      .mockImplementationOnce(() => Promise.resolve(requests[2]))
      .mockImplementationOnce(() => Promise.resolve(requests[3]));

    const response = await getAllSearchList({
      query: "sd"
    });

    expect(JSON.stringify(response)).toEqual(JSON.stringify(results));
  });

  it("Should reject network error if there's not a response came from axios", async () => {
    mockedApi.get.mockRejectedValue({ message: "Network Error" });

    try {
      await getAllSearchList({
        query: "sd"
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
      await getAllSearchList({
        query: "sd"
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
