import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { InputType } from "./types";
import { RootState } from "./reducers";

function Input({ secretWord }: InputType) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const success = useSelector((state: RootState) => state.success);

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form action="">
        <TextField
          label="Type a word"
          inputProps={{
            "data-test": "input-box",
          }}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            event.preventDefault();
            setCurrentGuess("");
          }}
        >
          <div data-test="submit-button">Search</div>
        </Button>
      </form>
    </div>
  );
}

export default Input;
