import { ReactWrapper, ShallowWrapper } from "enzyme";
import { createStore, Store } from "redux";
import rootReducers from "../src/reducers";

export const storeFactory = (initialState?:Object):Store => {
  return createStore(rootReducers, initialState);
};

export const findByTestAttr = (
  wrapper: ShallowWrapper | ReactWrapper,
  val: string
) => wrapper.find(`[data-test='${val}']`);
