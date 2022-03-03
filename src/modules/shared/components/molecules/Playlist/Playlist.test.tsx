import { render, screen, cleanup } from "@testing-library/react";
import Playlist from ".";
import { playlist } from "./mockedData";
import * as hooks from "../../../hooks/useMedia";

afterEach(cleanup);

describe("Playlist Component RTL", () => {
  it("Should have image with medium width and height if we are on large screens", () => {
    jest.spyOn(hooks, "useMedia").mockImplementation(() => false);

    render(<Playlist playlist={playlist} />);

    const image = screen.getByTestId("image");

    expect(image).toHaveAttribute("width", "320");
    expect(image).toHaveAttribute("height", "180");
  });

  it("Should have image with default width and height if we are on small screens", () => {
    jest.spyOn(hooks, "useMedia").mockImplementation(() => true);

    render(<Playlist playlist={playlist} />);

    const image = screen.getByTestId("image");

    expect(image).toHaveAttribute("width", "120");
    expect(image).toHaveAttribute("height", "90");
  });
});
