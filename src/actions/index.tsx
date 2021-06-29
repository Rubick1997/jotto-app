import axios from "axios";
import { Dispatch } from "react";
import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
};

export const guessWord = (guessedWord: string) => {
  return function (dispatch: Dispatch<any>, getState: any) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord:Function = () => {
  //return response from server
  //write actuall action in Redux/contet sections
  return function (dispatch:Dispatch<any>) {
    return axios.get("http://localhost:3030").then((response) => {
      dispatch({ type: actionTypes.SET_SECRET_WORD, payload: response.data });
    });
  };
};
