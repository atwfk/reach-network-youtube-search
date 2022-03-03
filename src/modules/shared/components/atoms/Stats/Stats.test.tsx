import { render, screen, cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Stats from ".";

afterEach(cleanup);

describe("Stats Component snapshots", () => {
  it("Should render three items of statistics with point separated", () => {
    const tree = renderer
      .create(<Stats stats={["TechWorld with Nana", "3.6M views", "a year ago"]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should render only with item without point separated", () => {
    const tree = renderer.create(<Stats stats={["TechWorld with Nana"]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Stats Component RTL", () => {
  it("should have three items of statistics", () => {
    render(<Stats stats={["TechWorld with Nana", "3.6M views", "a year ago"]} />);

    const stats = screen.getAllByTestId("stat");

    expect(stats).toHaveLength(3);
  });
});
