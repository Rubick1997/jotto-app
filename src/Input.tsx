import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { InputType } from "./types";
import { RootState } from "./reducers";
import { guessWord } from "./actions";

function Input({ secretWord }: InputType) {
  const dispatch = useDispatch();
  const [currentGuess, setCurrentGuess] = React.useState("");
  const success = useSelector((state: RootState) => state.success);

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form action="">
        <TextField
          label="type a guess"
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
            dispatch(guessWord(currentGuess))
            setCurrentGuess("");
          }}
        >
          <div data-test="submit-button">
            Search
          </div>
        </Button>
      </form>
    </div>
  );
}

export default Input;
