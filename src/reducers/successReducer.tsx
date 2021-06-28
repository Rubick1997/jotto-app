import { PayloadAction } from "@reduxjs/toolkit";
import { actionTypes } from "../actions";

export default function successReducer(
  state: boolean = false,
  action?: PayloadAction<undefined>
) {
  switch (action?.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
}
