import { render, screen, cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import SearchBtn from ".";

describe("SearchBtn Component snapshots", () => {
  it("Should render clickable SearchBtn", () => {
    const tree = renderer.create(<SearchBtn type="button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(cleanup);

describe("SearchBtn Component RTL", () => {
  it("should have disabled search button when we pass {disabled}", () => {
    render(<SearchBtn type="button" disabled />);

    const searchBtn = screen.getByTestId("search-btn");

    expect(searchBtn).toBeDisabled();
  });

  it("should not have disabled search button when we don't pass {disabled}", () => {
    render(<SearchBtn type="button" />);

    const searchBtn = screen.getByTestId("search-btn");

    expect(searchBtn).not.toBeDisabled();
  });
});
