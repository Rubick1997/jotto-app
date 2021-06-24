import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
  return (
    <Container>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "potter", letterMatchCount: 3 }]}
      />
    </Container>
  );
}

export default App;
