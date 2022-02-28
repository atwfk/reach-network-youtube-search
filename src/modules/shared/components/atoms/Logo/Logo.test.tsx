import renderer from "react-test-renderer";
import "jest-styled-components";
import Logo from ".";

describe("Logo Component snapshots", () => {
  it("Should render Logo with primary and secondary", () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
