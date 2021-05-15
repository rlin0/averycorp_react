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

export default class Flow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null
    }
    for (let i = 0; i < this.props.dim; i++) {
      for (let j = 0; j < this.props.dim; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        this.state[s] = null;
      }
    }
  }

  checkAnswer = () => {
    for (let i = 0; i < this.props.dim; i++) {
      for (let j = 0; j < this.props.dim; j++) {
        let s = "t" + i.toString() + "-" + j.toString()
        if (this.state[s] !== this.props.answer[i][j]) return false
      }
    }
    return true
  }

  render() {
    if (this.checkAnswer()) return <p>Solved!</p>
    return (
      <div style={{ cursor: "default", width: "50%" }}>
        <GridList cellHeight={40} cols={this.props.dim}>
          {Array.from(this.props.tileInitial.keys()).map((key) => {
            let value = this.props.tileInitial.get(key)
            if (value !== null) {
              return (
                <GridListTile
                  key={key}
                  cols={1}
                  onClick={() => {
                    this.setState({ color: value })
                  }}
                >
                  <Tile color={value} char="o" />
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
                  <Tile color={this.state[key]} char="" />
                </GridListTile>
              )
            }
          })}
        </GridList>
        <Button onClick={() => this.setState({ color: null })}>Erase</Button>
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
        <Button
          variant="outlined"
          style={{
            backgroundColor: this.props.color,
            width: "30px",
            height: "30px",
          }}
        >
          {this.props.char}
        </Button>
      </>
    )
  }
}
