import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Title from ".";

afterEach(cleanup);

describe("Title Component snapshots", () => {
  it("Should render simple Title component", () => {
    const tree = renderer
      .create(<Title title="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
