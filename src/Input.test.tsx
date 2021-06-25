import React, { ComponentState } from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

//if we want to use useState insea of React.useState
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState:(initialState:string)=>[initialState,mockSetCurrentGuess]
// }));

const setup = () => {
  return shallow(<Input />);
};

test("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess: jest.Mock = jest.fn();
  let wrapper: ShallowWrapper;
  let originalUseState:ComponentState
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState
  })
  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click",{preventDefault(){}});
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
