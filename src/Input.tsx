import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function Input(props: { secretWord?: string }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  return (
    <div data-test="component-input">
      <form action="">
        <TextField
          label="type a word"
          data-test="input-box"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <Button
          data-test="submit-button"
          variant="contained"
          color="primary"
          onClick={(event) => {
            event.preventDefault();
            setCurrentGuess("");
          }}
        >
          Primary
        </Button>
      </form>
    </div>
  );
}

export default Input;
