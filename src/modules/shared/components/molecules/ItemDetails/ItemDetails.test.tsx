import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import ItemDetails from ".";

afterEach(cleanup);

describe("Title ItemDetails snapshots", () => {
  it("Should render ItemDetails component with title, description, and stats", () => {
    const tree = renderer
      .create(
        <ItemDetails
          title="Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]"
          stats={["TechWorld with Nana", "3.6M views", "a year ago"]}
          description="Full Kubernetes Tutorial | Kubernetes Course | Hands-on course with a lot of demos Become a Kubernetes Administrator - CKA: ..."
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
