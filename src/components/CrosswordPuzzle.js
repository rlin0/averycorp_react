import React, { Component } from "react"
import { Typography, TextField, Button } from "@material-ui/core"
import Crossword from "@jaredreisinger/react-crossword"
import { ButtonLink } from "./UI/Links"
import { crosswordPlayer1, crosswordPlayer2 } from "../text/crossword"
import Act from "./Act"

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
    }

    this.myRef = React.createRef()
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (this.myRef.current.isCrosswordCorrect()) {
      this.setState({ solved: true })
    } else {
      this.setState({ incorrect: true })
    }
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
        <ButtonLink buttonText="Back to Map" to="/act2" />
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
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          {this.state.solved ? (
            <Typography>Solved!</Typography>
          ) : (
            <>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              {this.state.incorrect && (
                <Typography color="error"> Incorrect! </Typography>
              )}
            </>
          )}
        </form>
      </Act>
    )
  }
}
