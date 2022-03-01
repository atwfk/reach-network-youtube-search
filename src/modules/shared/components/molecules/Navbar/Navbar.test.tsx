import renderer from "react-test-renderer";
import "jest-styled-components";
import Navbar from ".";

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useHistory: jest.fn(),
    useNavigate: jest.fn()
  };
});

describe("Navbar Component snapshots", () => {
  it("Should render Navbar component", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
