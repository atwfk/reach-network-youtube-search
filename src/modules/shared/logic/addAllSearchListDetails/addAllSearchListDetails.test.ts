import { addAllSearchListDetails, transformSearchListDetails } from "./addAllSearchListDetails";
import {
  channelsDetails,
  playlistDetails,
  searchListDetails,
  videosDetails,
  searchListDetailsRes,
  searchSnippets
} from "./mockedData";

describe("transformSearchListDetails", () => {
  it("should transform search details list to search details object with key={id} and value={item details}", () => {
    const transformedSearchListDetails = transformSearchListDetails({
      videos: videosDetails,
      channels: channelsDetails,
      playlists: playlistDetails
    });
    expect(transformedSearchListDetails).toEqual(searchListDetails);
  });
});

describe("addAllSearchListDetails", () => {
  it("should manipulate search list details with search list snippets", () => {
    const searchListResults = addAllSearchListDetails({
      searchData: searchSnippets,
      searchListDetails: searchListDetails
    });

    expect(searchListResults).toEqual(searchListDetailsRes);
  });
});
