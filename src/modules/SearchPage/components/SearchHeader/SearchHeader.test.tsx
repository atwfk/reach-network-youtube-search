import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import SearchHeader from ".";

afterEach(cleanup);

describe("SearchHeader Component snapshots", () => {
  it("Should render simple SearchHeader component", () => {
    const tree = renderer.create(<SearchHeader totalResults={131909} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
