import React, { Component } from "react"
import DialogueBox from "./UI/DialogueBox"
import FeedbackBar from "./UI/FeedbackBar"
import ModalBox from "./UI/ModalBox"
import ExpositionBox from "./UI/ExpositionBox"
import InputModal from "./UI/InputModal"
import text from "../text/sampleText"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import {
  CssBaseline,
  Grid,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core"

let tileData = new Map()

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let s = "t" + i.toString() + j.toString()
    tileData.set(s, null)
  }
}
// TODO: Set colors of starting points
tileData.set("t11", "yellow")
tileData.set("t12", "brown")
tileData.set("t13", "orange")

// TODO: fill in the rest
const answer = [
  ["blue", "blue", "blue", "blue", "blue", "pink", "pink", "pink", "pink"],
  ["blue"],
]

export default class Act0 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null,
      t00: null,
      t01: null,
      t02: null,
      t03: null,
      t04: null,
      t05: null,
      t06: null,
      t07: null,
      t08: null,
      t09: null,
      t10: null,
      t11: null,
      t12: null,
      t13: null,
      t14: null,
      t15: null,
      t16: null,
      // TODO: fill in the rest
      t88: null,
    }
  }

  checkAnswer = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let s = "t" + i.toString() + j.toString()
        if (this.state[s] !== answer[i][j]) return false
      }
    }
    return true
  }

  render() {
    if (this.checkAnswer()) return <p>Solved!</p>
    return (
      <div style={{ cursor: "default" }}>
        <GridList cellHeight={80} cols={9}>
          {Array.from(tileData.keys()).map((key) => {
            let value = tileData.get(key)
            if (value !== null) {
              return (
                <GridListTile
                  key={key}
                  cols={1}
                  onClick={() => {
                    this.setState({ color: value })
                  }}
                >
                  <Tile color={value} char="x" />
                </GridListTile>
              )
            } else {
              return (
                <GridListTile
                  key={key}
                  cols={1}
                  onClick={() => {
                    this.setState({ [key]: this.state.color })
                  }}
                >
                  <Tile color={this.state[key]} char="o" />
                </GridListTile>
              )
            }
          })}
        </GridList>
        <Button onClick={() => this.setState({ color: "white" })}>Erase</Button>
      </div>
    )
  }
}

class Tile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <h1 style={{ color: this.props.color }}>{this.props.char}</h1>
      </>
    )
  }
}
