import React from "react";
import { GuessedWordsType } from "./types";

function GuessedWords(props: GuessedWordsType) {
  let contents =
    props.guessedWords.length === 0 ? (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    ) : (
      <div></div>
    );

  return <div data-test="component-guessed-words">{contents}</div>;
}

export default GuessedWords;
