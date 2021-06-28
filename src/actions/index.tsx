import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord: string) => {
  return function ({ dispatch, getState }: any) {};
};

export const getSecretWord = () => {
  //return response from server
  //write actuall action in Redux/contet sections
  return axios.get("http://localhost:3030").then((response) => response.data);
};
