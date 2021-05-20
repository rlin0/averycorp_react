import React, { Component } from "react"
import { Typography, TextField, Button } from "@material-ui/core"
import { S3Url } from "../helpers"
import DialogueBox from "./UI/DialogueBox"
import axios from "axios"
import text from "../text/act1Scripts"
import "./Act0.css"

export default class Act0 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      answer: null,
      solved: null,
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.state.answer === "375,241") {
      this.setState({ solved: true })
    } else {
      this.setState({ incorrect: false })
      alert("incorrect")
    }
  }

  handleMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }

  render() {
    const { x, y } = this.state
    return (
      <>
        {this.state.solved && <DialogueBox data={text.act1MapCorrect} />}
        {!this.props.introPlayed && (
          <DialogueBox
            data={text.act1Intro}
            onEnd={() => this.props.setIntroPlayed("intro0Played")}
          />
        )}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            top: "20%",
          }}
        >
          <div>
            <img
              onMouseMove={this.handleMouseMove.bind(this)}
              id="puzzle-map"
              src={S3Url + "/map.svg"}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography id="x-coord" align="center">
                {x}
              </Typography>
              <Typography id="y-coord" align="center">
                {y}
              </Typography>
            </div>
          </div>
          <div>
            <img id="puzzle0" src={S3Url + "/intro_puzzle.png"} />
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
              {this.state.solved ? (
                <Typography>Solved!</Typography>
              ) : (
                <>
                  <Typography>
                    Enter where you would like to go (no spaces).
                  </Typography>
                  <TextField
                    label="Answer"
                    onChange={({ target }) =>
                      this.setState({ answer: target.value })
                    }
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </>
    )
  }
}
