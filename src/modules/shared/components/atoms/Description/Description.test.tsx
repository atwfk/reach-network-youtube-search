import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Description from ".";

afterEach(cleanup);

describe("Description Component snapshots", () => {
  it("Should render simple Description component", () => {
    const tree = renderer
      .create(
        <Description description="Full Kubernetes Tutorial | Kubernetes Course | Hands-on course with a lot of demos Become a Kubernetes Administrator - CKA: ..." />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
