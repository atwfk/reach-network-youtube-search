import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Image from ".";

afterEach(cleanup);

describe("Image Component snapshots", () => {
  it("Should render simple Image component", () => {
    const tree = renderer
      .create(
        <Image
          src="https://i.ytimg.com/vi/X48VuDVv0do/mqdefault.jpg"
          alt="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]"
          width="320"
          height="180"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
