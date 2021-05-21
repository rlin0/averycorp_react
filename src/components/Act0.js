import React, { Component } from "react"
import { Typography, TextField, Button, Link } from "@material-ui/core"
import { S3Url } from "../helpers"
import DialogueBox from "./UI/DialogueBox"
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
      this.setState({ solved: false })
    }
  }

  handleMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }

  render() {
    const { x, y } = this.state
    return (
      <>
        {!this.props.introPlayed && (
          <DialogueBox
            data={text.act1Intro}
            onEnd={() => this.props.setIntroPlayed("intro0Played")}
          />
        )}
        {this.state.solved && (
          <>
            <DialogueBox data={text.act1MapCorrect} />
            <Typography>
              Proceed to the{" "}
              <Link
                href="https://discord.gg/ccJvehav"
                color="inherit"
                underline="always"
              >
                {"next room."}
              </Link>
            </Typography>
          </>
        )}
        {this.state.solved === false && (
          <DialogueBox data={text.act1MapWrong} />
        )}
        {!this.state.solved && (
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
              <Typography align="center" variant="h5">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ color: "#78d766" }}>{x}</div>
                  <div>,</div>
                  <div style={{ color: "#18a1d9" }}>{y}</div>
                </div>
              </Typography>
            </div>
            <div>
              <img id="puzzle0" src={S3Url + "/intro_puzzle.png"} />
              <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                {
                  <div id="puzzle0-submit">
                    <Typography>Enter where you would like to go.</Typography>
                    <TextField
                      label="Answer"
                      onChange={({ target }) =>
                        this.setState({ answer: target.value })
                      }
                    />
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </div>
                }
              </form>
            </div>
          </div>
        )}
      </>
    )
  }
}

class Act0Correct extends Component {}
