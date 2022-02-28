import renderer from "react-test-renderer";
import "jest-styled-components";
import Navbar from ".";

describe("Navbar Component snapshots", () => {
  it("Should render Navbar component", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
