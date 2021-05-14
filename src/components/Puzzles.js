import React, { Component } from "react"
import { Button, Typography, TextField } from "@material-ui/core"
import axios from "axios"
import { Link } from "react-router-dom"
import Puzzle from "./Puzzle"
import Crossword from "@jaredreisinger/react-crossword"
import { crosswordPlayer1, crosswordPlayer2 } from "../text/crossword"

export class Puzzle1 extends Component {
  render() {
    return (
      <Puzzle puzzleId="1" teamId={this.props.teamId}>
        <p>puzzle 1 description here</p>
      </Puzzle>
    )
  }
}

export class Puzzle3 extends Component {
  render() {
    return (
      <Crossword
        data={crosswordPlayer1}
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
    )
  }
}
