import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import TotalGuesses from "./TotalGuesses";

const defaultProps = { guessedCount: 0 };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-total-guesses");
  expect(component.length).toBe(1);
});
test("renders the number of guesses", () => {
  const guessedCount = 8;
  const wrapper = setup({ guessedCount });
  const component = findByTestAttr(wrapper, "component-total-guesses");
  expect(component.text()).toContain(guessedCount.toString());
});
