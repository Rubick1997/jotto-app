import { combineReducers } from "redux";
import successReducer from "./successReducer";
import guessedWordsReducer from "./guessedWordsReducer";
import secretWordReducer from "./secretWordReducer";

const rootReducers = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord:secretWordReducer
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
