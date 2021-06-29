import { PayloadAction } from "@reduxjs/toolkit";
import { actionTypes } from "../actions";

const guessedWordsReducer = (state = [], action: PayloadAction) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default guessedWordsReducer;
