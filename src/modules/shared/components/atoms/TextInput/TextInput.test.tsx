import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import renderer from "react-test-renderer";
import TextInput from ".";

afterEach(cleanup);

describe("TextInput Component snapshots", () => {
  const changed = jest.fn();
  const deleteText = jest.fn();

  it("Should render input element without delete icon when input is empty", () => {
    const tree = renderer
      .create(
        <TextInput
          name="search"
          id="1"
          placeholder="Search"
          value=""
          changed={changed}
          deleteText={deleteText}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should render input element with delete icon when input has value", () => {
    const tree = renderer
      .create(
        <TextInput
          name="search"
          id="1"
          placeholder="Search"
          value="sabba7"
          changed={changed}
          deleteText={deleteText}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("TextInput Component RTL", () => {
  const changed = jest.fn();
  const deleteText = jest.fn();

  it("should not have delete icon in the DOM when input is empty", () => {
    render(
      <TextInput
        name="search"
        id="1"
        placeholder="Search"
        value=""
        changed={changed}
        deleteText={deleteText}
      />
    );

    const deleteBtn = screen.queryByTestId("delete-btn");

    expect(deleteBtn).not.toBeInTheDocument();
  });

  it("should have delete icon in the DOM when input has value", () => {
    render(
      <TextInput
        name="search"
        id="1"
        placeholder="Search"
        value="sabba7"
        changed={changed}
        deleteText={deleteText}
      />
    );

    const deleteBtn = screen.getByTestId("delete-btn");

    expect(deleteBtn).toBeInTheDocument();
  });

  it("should call onChange when we start typing in the input", () => {
    render(
      <TextInput
        name="search"
        id="1"
        placeholder="Search"
        value=""
        changed={changed}
        deleteText={deleteText}
      />
    );

    const input = screen.getByTestId("text-input");
    userEvent.type(input, "aa");

    expect(changed).toHaveBeenCalledTimes(2);
  });

  it("should call deleteText when we click on delete icon", () => {
    render(
      <TextInput
        name="search"
        id="1"
        placeholder="Search"
        value="aa"
        changed={changed}
        deleteText={deleteText}
      />
    );

    const deleteBtn = screen.getByTestId("delete-btn");

    userEvent.click(deleteBtn);

    expect(deleteText).toHaveBeenCalled();
  });
});
