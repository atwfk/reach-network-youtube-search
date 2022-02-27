import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
