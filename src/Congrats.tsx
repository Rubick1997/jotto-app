import React from "react";
import { CongratsType } from "./types";
import { Chip } from "@material-ui/core";

function Congrats({ success }: CongratsType) {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span>
          <Chip
            data-test="congrats-message"
            label="Congratulations! You guessed the world!"
            style={{ backgroundColor: "green" }}
          />
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
}

export default Congrats;
