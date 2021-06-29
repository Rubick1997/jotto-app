import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "./actions";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";
import { useAppDispatch } from "./store";

function App() {
  const success = useSelector((state: RootState) => state.success);
  const guessedWords = useSelector((state: RootState) => state.guessedWords);
  const secretWord = useSelector((state: RootState) => state.secretWord);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSecretWord());
  }, []);

  return (
    <Container data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </Container>
  );
}

export default App;
