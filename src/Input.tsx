import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useAppDispatch } from "./store";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";
import { guessWord } from "./actions";

function Input() {
  const dispatch = useAppDispatch();
  const [currentGuess, setCurrentGuess] = React.useState("");
  const success = useSelector((state: RootState) => state.success);

  if (success) {
    return <div data-test="component-input" />;
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(guessWord(currentGuess));
      setCurrentGuess("");
    }
  };

  return (
    <div data-test="component-input">
      <form>
        <TextField
          label="type a guess"
          inputProps={{
            "data-test": "input-box",
          }}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            event.preventDefault();
            dispatch(guessWord(currentGuess));
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
