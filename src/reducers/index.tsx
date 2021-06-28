import { combineReducers } from "redux";
import successReducer from "./successReducer";

const rootReducers = combineReducers({
  success: successReducer,
});

export type RootState = ReturnType<typeof rootReducers>
export default rootReducers;
