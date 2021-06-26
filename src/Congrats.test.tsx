import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";
import { CongratsType } from "./types";
import { createShallow } from "@material-ui/core/test-utils";

const setup = (props?: CongratsType) => {
  let shallow = createShallow();
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when 'success' props is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats when 'success' props is true", () => {
  const wrapper = setup({ success: true });
   const message = expect(wrapper.find('chip'))
  expect(message).not.toBe(0);
});
