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
      played: 0,
      answer: null,
      solved: null,
    }
  }

  setPlayed = (num) => () => {
    this.setState({ played: num })
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
        {!this.props.introPlayed && this.state.played === 0 && (
          <div
            style={{
              display: "block",
              position: "fixed",
              width: "80%",
              left: "10%",
              zIndex: "10",
            }}
          >
            <img
              src={S3Url + "/story_art/headphones.png"}
              alt="shutdown_button"
              style={{ width: "100%" }}
            />
            <audio
              autoPlay
              controls
              className="audio"
              onEnded={this.setPlayed(1)}
              style={{
                position: "fixed",
                top: "90%",
                width: "40%",
                left: "30%",
                zIndex: "100",
              }}
            >
              <source src={S3Url + "/neural_scan.mp3"} type="audio/mp3" />
            </audio>
          </div>
        )}
        {!this.props.introPlayed && this.state.played === 1 && (
          <DialogueBox data={text.act1Intro} onEnd={this.setPlayed(2)} />
        )}
        {!this.props.introPlayed && this.state.played === 2 && (
          <DialogueBox
            data={text.act1Intro2}
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
                target="_blank"
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
