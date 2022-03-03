import { render, screen, cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import ImageLayer from ".";

afterEach(cleanup);

describe("ImageLayer Component snapshots", () => {
  it("Should render ImageLayer component with duration when we pass duration prop", () => {
    const tree = renderer
      .create(
        <ImageLayer
          src={"https://i.ytimg.com/vi/X48VuDVv0do/mqdefault.jpg"}
          alt="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]"
          width="320"
          height="180"
          duration="03:36:55"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should render ImageLayer component with number of playlist videos when we pass playlistCount prop", () => {
    const tree = renderer
      .create(
        <ImageLayer
          src={"https://i.ytimg.com/vi/X48VuDVv0do/mqdefault.jpg"}
          alt="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]"
          width="320"
          height="180"
          playlistCount={13}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Stats Component RTL", () => {
  it("Should have duration when we pass duration prop", () => {
    render(
      <ImageLayer
        src={"https://i.ytimg.com/vi/X48VuDVv0do/mqdefault.jpg"}
        alt="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]"
        width="320"
        height="180"
        duration="03:36:55"
      />
    );

    const duration = screen.getByTestId("duration");
    const playlistCount = screen.queryByTestId("playlist-count");

    expect(duration).toBeInTheDocument();
    expect(playlistCount).not.toBeInTheDocument();
  });

  it("Should have playlist count when we pass playlistCount prop", () => {
    render(
      <ImageLayer
        src={"https://i.ytimg.com/vi/X48VuDVv0do/mqdefault.jpg"}
        alt="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]"
        width="320"
        height="180"
        playlistCount={13}
      />
    );

    const playlistCount = screen.getByTestId("playlist-count");
    const duration = screen.queryByTestId("duration");

    expect(playlistCount).toBeInTheDocument();
    expect(duration).not.toBeInTheDocument();
  });
});
