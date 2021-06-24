import React from "react";
import { GuessedWordsType } from "./types";

function GuessedWords(props: GuessedWordsType) {
  const guessedWordsRows = props.guessedWords.map((word, index) => (
    <tr key={index} data-test="guessed-word">
      <td>{word.guessedWord}</td> <td>{word.letterMatchCount}</td>
    </tr>
  ));

  const contents =
    props.guessedWords.length === 0 ? (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    ) : (
      <div data-test="guessed-words">
        <h3>Guessed words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );

  return <div data-test="component-guessed-words">{contents}</div>;
}

export default GuessedWords;
