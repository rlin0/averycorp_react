import React, { Component } from "react"
import { Button, Typography, TextField } from "@material-ui/core"
import axios from "axios"
import { Link } from "react-router-dom"
import Puzzle from "./Puzzle"
import Crossword from "@jaredreisinger/react-crossword"
import { crosswordPlayer1, crosswordPlayer2 } from "../text/crossword"
import Act from "./Act"

export class Puzzle3 extends Component {
  render() {
    var crossword = null
    if (this.props.role === 0) {
      crossword = crosswordPlayer1
    } else {
      crossword = crosswordPlayer2
    }
    return (
      <Act
        id={2}
        act={this.props.act}
        updateAct={this.props.updateAct}
        passcode="2"
      >
        <Crossword
          data={crossword}
          theme={{
            gridBackground: "transparent",
            cellBackground: "rgba(255,255,255,0.8)",
            cellBorder: "#8561a9",
            textColor: "#000",
            numberColor: "#638",
            focusBackground: "#97a",
            highlightBackground: "#859",
          }}
        />
      </Act>
    )
  }
}
