import { combineReducers } from "redux";
import successReducer from "./successReducer";
import guessedWordsReducer from "./guessedWordsReducer";

const rootReducers = combineReducers({
  success: successReducer,
  guessWords: guessedWordsReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
