import { render, screen, cleanup } from "@testing-library/react";
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

describe("Image Component RTL", () => {
  it("should have image with channel class when we pass isChannel prop", () => {
    render(
      <Image
        src="https://i.ytimg.com/vi/X48VuDVv0do/mqdefault.jpg"
        alt="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]"
        width="320"
        height="180"
        isChannel
      />
    );

    const image = screen.getByTestId("image");

    expect(image).toHaveClass("channel");
  });

  it("should have image without channel class when we don't pass isChannel prop", () => {
    render(
      <Image
        src="https://i.ytimg.com/vi/X48VuDVv0do/mqdefault.jpg"
        alt="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]"
        width="320"
        height="180"
      />
    );

    const image = screen.getByTestId("image");

    expect(image).not.toHaveClass("channel");
  });
});
