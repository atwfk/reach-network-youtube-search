import { render, screen, cleanup } from "@testing-library/react";
import Video from ".";
import { video } from "./mockedData";
import * as hooks from "../../../hooks/useMedia";

afterEach(cleanup);

describe("Video Component RTL", () => {
  it("Should have image with medium width and height if we are on large screens", () => {
    jest.spyOn(hooks, "useMedia").mockImplementation(() => false);

    render(<Video video={video} />);

    const image = screen.getByTestId("image");

    expect(image).toHaveAttribute("width", "320");
    expect(image).toHaveAttribute("height", "180");
  });

  it("Should have image with default width and height if we are on small screens", () => {
    jest.spyOn(hooks, "useMedia").mockImplementation(() => true);

    render(<Video video={video} />);

    const image = screen.getByTestId("image");

    expect(image).toHaveAttribute("width", "120");
    expect(image).toHaveAttribute("height", "90");
  });

  it("Should have channel title, views count and publish date as stats if we are on large screens", () => {
    jest.spyOn(hooks, "useMedia").mockImplementation(() => false);

    render(<Video video={video} />);

    const stat = screen.getAllByTestId("stat");

    expect(stat).toHaveLength(3);
  });

  it("Should have channel title and views count as stats if we are on small screens", () => {
    jest.spyOn(hooks, "useMedia").mockImplementation(() => true);

    render(<Video video={video} />);

    const stat = screen.getAllByTestId("stat");

    expect(stat).toHaveLength(2);
  });
});
