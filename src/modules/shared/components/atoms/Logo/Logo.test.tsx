import renderer from "react-test-renderer";
import Logo from ".";

describe("Logo Component", () => {
  it("Should Logo with primary and secondary", () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
