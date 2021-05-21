import React, { Component } from "react"
import { Typography, TextField, Button, IconButton } from "@material-ui/core"
import MusicOn from "@material-ui/icons/MusicNote"
import MusicOff from "@material-ui/icons/MusicOff"
import Crossword from "@jaredreisinger/react-crossword"
import { ButtonLink } from "./UI/Links"
import { crosswordPlayer1, crosswordPlayer2 } from "../text/crossword"
import Act from "./Act"
import axios from "axios"
import DialogueBox from "./UI/DialogueBox"
import { S3Url } from "../helpers"
import text from "../text/act2Scripts"

export class Puzzle3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: null,
      link: null,
      name: null,
      solved: false,
      incorrect: false,
      act: null,
      audio: false,
    }

    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.getSolved()
  }

  getSolved = () => {
    axios
      .get("/api/puzzle/get_solved", {
        params: {
          teamId: this.props.teamId,
          puzzleId: this.props.puzzleId,
        },
      })
      .then((res) => {
        this.setState({
          solved: res.data.solved,
        })
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.myRef.current.isCrosswordCorrect()) {
      this.setState({ solved: true })
      axios
        .post("/api/puzzle/submit_crossword", {
          teamId: this.props.teamId,
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    } else {
      this.setState({ incorrect: true })
    }
  }

  toggleAudio = () => {
    if (!this.state.audio) {
      const audioEl = document.getElementsByClassName("audio")[0]
      if (audioEl) audioEl.play()
    }
    this.setState((state) => {
      return { audio: !state.audio }
    })
  }

  render() {
    var crossword = null
    if (this.props.role === "0") {
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
        {this.state.solved ? (
          <DialogueBox data={text.act2CrosswordAfter} />
        ) : null}
        {!this.state.solved ? (
          <DialogueBox
            data={text.act2CrosswordBefore}
            onEnd={() => {
              const audioEl = document.getElementsByClassName("audio")[0]
              if (audioEl) audioEl.play()
              this.setState({ audio: true })
            }}
          />
        ) : null}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonLink buttonText="Back to Map" to="/act2/map" />
          <IconButton
            onClick={this.toggleAudio}
            color="primary"
            size="medium"
            variant="contained"
            style={{
              position: "relative",
              top: "5%",
              right: "5%",
              zIndex: "1",
            }}
          >
            {this.state.audio ? <MusicOn /> : <MusicOff />}
          </IconButton>
          <audio autoPlay loop muted={!this.state.audio} className="audio">
            <source src={S3Url + "/Thinking.wav"} type="audio/wav" />
          </audio>
        </div>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          {" "}
          Crossword {this.state.solved ? "- Solved!" : ""}{" "}
        </Typography>
        <Crossword
          data={crossword}
          onCorrect={this.markCorrectClue}
          ref={this.myRef}
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
        {this.state.solved ? null : (
          <div
            style={{
              position: "fixed",
              right: "10%",
              bottom: "10%",
              zIndex: "0",
            }}
          >
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              {this.state.incorrect && (
                <Typography color="error">Incorrect!</Typography>
              )}
            </form>
          </div>
        )}
      </Act>
    )
  }
}
