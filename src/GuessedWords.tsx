import React from "react";
import { GuessedWordsType } from "./types";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import TotalGuesses from "./TotalGuesses";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

function GuessedWords(props: GuessedWordsType) {
  const guessedCount = props.guessedWords.length;

  const guessedWordsRows = props.guessedWords.map((word, index) => (
    <tr key={index} data-test="guessed-word">
      <TableCell>{index + 1}</TableCell>
      <TableCell>{word.guessedWord}</TableCell>
      <TableCell>{word.letterMatchCount}</TableCell>
    </tr>
  ));

  const contents =
    props.guessedWords.length === 0 ? (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    ) : (
      <TableContainer component={Paper} data-test="guessed-words">
        <h3>Guessed words</h3>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Guess</StyledTableCell>
              <StyledTableCell>Matching Letters</StyledTableCell>
            </TableRow>
          </TableHead>
          <tbody>{guessedWordsRows}</tbody>
        </Table>
        <TotalGuesses guessedCount={guessedCount} />
      </TableContainer>
    );

  return <div data-test="component-guessed-words">{contents}</div>;
}

export default GuessedWords;
