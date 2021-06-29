import React from "react";

function TotalGuesses(props: { guessedCount: number }) {
  return (
    <h3>
      Total Guesses:
      <span data-test="component-total-guesses">{props.guessedCount}</span>
    </h3>
  );
}

export default TotalGuesses;
