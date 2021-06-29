import { Store } from "redux";
import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";

describe("guessedWord ation dispatcher", () => {
  const secretWord = "attack";
  const unsuccessfulGuess = "titans";

  describe("no guessed words", () => {
    let store: Store<any, any>;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 4,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 6,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    const guessedWords = [{ guessedWord: "party", letterMatchCount: 2 }];
    const initialState = { guessedWords, secretWord };
    let store: Store<any, any>;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 4 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 6 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
