import { ReactWrapper, ShallowWrapper } from "enzyme";
import { createStore, Store, applyMiddleware } from "redux";
import { middlewares } from "../src/store";
import rootReducers from "../src/reducers";

export const storeFactory = (initialState?: Object): Store => {
  return createStore(rootReducers, initialState,applyMiddleware(...middlewares));
};

export const findByTestAttr = (
  wrapper: ShallowWrapper | ReactWrapper,
  val: string
) => wrapper.find(`[data-test='${val}']`);
