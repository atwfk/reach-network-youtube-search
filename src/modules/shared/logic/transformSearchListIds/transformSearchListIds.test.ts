import {
  createCommaSeparatedList,
  filterSearchListByKind,
  getSearchListIds,
  transformSearchListIds
} from "./transformSearchListIds";
import { searchSnippets, videoListSnippets } from "./mockedData";
import { ESearchKind } from "../../types/searchData/ESearchTypes";

describe("filterSearchListByKind", () => {
  it("should return video list if we pass searchKind={video}", () => {
    const videoList = filterSearchListByKind({
      searchList: searchSnippets,
      searchKind: ESearchKind.VIDEO
    });

    expect(videoList).toEqual(videoListSnippets);
  });
});

describe("getSearchListIds", () => {
  it("should return list of ids", () => {
    const searchListIds = getSearchListIds({ searchList: videoListSnippets, keyId: "videoId" });

    const results = ["31ieHmcTUOk"];
    expect(searchListIds).toEqual(results);
  });
});

describe("createCommaSeparatedList", () => {
  it("should return comma separated list ids", () => {
    const listIds = ["1", "2", "3"];

    const commaSeparatedList = createCommaSeparatedList(listIds);

    const results = ",1,2,3";
    expect(commaSeparatedList).toEqual(results);
  });
});

describe("transformSearchListIds", () => {
  it("should return list of comma separated list ids", () => {
    const commaSeparatedLists = transformSearchListIds(searchSnippets);

    const results = [
      ",31ieHmcTUOk",
      ",UCW5YeuERMmlnqo4oq8vwUpg",
      ",PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7"
    ];
    expect(commaSeparatedLists).toEqual(results);
  });
});
