import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import TotalResults from ".";

afterEach(cleanup);

describe("TotalResults Component snapshots", () => {
  it("Should render simple TotalResults component", () => {
    const tree = renderer.create(<TotalResults totalResults={131909} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
